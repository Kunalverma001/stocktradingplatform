const cron = require("node-cron");
const { UsersModel } = require("../Model/UsersModel");
const { HoldingsModel } = require("../Model/HoldingsModel");
const { PositionsModel } = require("../Model/PositionsModel");
const { OrdersModel } = require("../Model/OrdersModel");
const { FundsModel } = require("../Model/FundsModel");

const sendEmail = require("../Utils/sendEmail");


cron.schedule("0 2 * * *", async () => {
    // runs every day at 2 AM
    try {

        const cutoffDate = new Date(
            Date.now() - 5 * 24 * 60 * 60 * 1000
        );

        const FOUR_DAYS = 4 * 24 * 60 * 60 * 1000;
        const FIVE_DAYS = 5 * 24 * 60 * 60 * 1000;

        const now = Date.now();

        // 🔔 DAY-4 REMINDER EMAIL
        const usersToRemind = await UsersModel.find({
            lastActive: {
                $lt: new Date(now - FOUR_DAYS),
                $gt: new Date(now - FIVE_DAYS),
            },
            reminderSent: false,
        });

        for (const user of usersToRemind) {
            await sendEmail(
                user.email,
                "⚠️ Your trading data will be deleted in 24 hours",
                `
      <p>Hello <strong>${user.name}</strong>,</p>

      <p>
        You have been inactive on <strong>Stock Trading App</strong> for almost
        <strong>5 days</strong>.
      </p>

      <p>
        If you do not log in within the next <strong>24 hours</strong>, all your trading data
        (holdings, positions, orders, and funds) will be
        <strong>permanently deleted</strong>.
      </p>

      <p>
        <a
          href="${process.env.DASHBOARD_URL}"
          style="
            display: inline-block;
            padding: 10px 16px;
            background: #387ed1;
            color: #ffffff;
            text-decoration: none;
            border-radius: 6px;
            font-weight: 600;
          "
        >
          Log in now to keep your data safe
        </a>
      </p>

      <p style="margin-top: 24px;">
        — <br />
        <strong>Stock Trading App Team</strong>
      </p>
    `
            );

            user.reminderSent = true;
            await user.save();
        }



        const inactiveUsers = await UsersModel.find({
            lastActive: { $lt: cutoffDate },
        });

        for (const user of inactiveUsers) {

            await HoldingsModel.deleteMany({ userId: user._id });
            await PositionsModel.deleteMany({ userId: user._id });
            await OrdersModel.deleteMany({ userId: user._id });
            await FundsModel.deleteMany({ userId: user._id });

            console.log(
                `[CLEANUP] user=${user._id} lastActive=${user.lastActive}`
            );
        }
    } catch (err) {
        console.error("Cleanup job error:", err);
    }
});
