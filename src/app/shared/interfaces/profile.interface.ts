export interface Profile {
    data: {
        name: number,
        role: string,
        phone: number,
        createdAt: Date,
        updatedAt: Date,
        Wallet: {
            cash: number,
            createdAt: Date,
        }
    }
}
