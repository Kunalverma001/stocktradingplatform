// src/data/fundsData.js

export const fundsOverview = {
    totalBalance: 50000,           // total money in account
    availableBalance: 38000,       // available for new trades
    usedMargin: 12000,             // blocked for current trades
    withdrawableBalance: 38000,    // same as available here
};

export const fundTransactions = [
    {
        id: 1,
        type: "credit",
        description: "Initial Deposit",
        amount: 50000,
        date: "2025-11-01T10:00:00Z",
        balanceAfter: 50000,
    },
    {
        id: 2,
        type: "debit",
        description: "Buy: TCS (5x ₹2400)",
        amount: 12000,
        date: "2025-11-03T14:35:00Z",
        balanceAfter: 38000,
    },
    {
        id: 3,
        type: "credit",
        description: "Funds Added",
        amount: 5000,
        date: "2025-11-05T09:20:00Z",
        balanceAfter: 43000,
    },
];
