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
                    Hello ${user.name},

                    You have been inactive on Stock Trading App for almost 5 days.

                    If you do not log in within the next 24 hours, all your trading data
                    (holdings, positions, orders, and funds) will be permanently deleted.

                    Log in now to keep your data safe:
                    ${process.env.DASHBOARD_URL}

                    — Stock Trading App Team
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
