export interface DetailsMedicine {
    id: number,
    categoryId: number,
    name: string,
    image: string,
    qty: number,
    price: number,
    createdAt: Date,
    updatedAt: Date,
    Category: {
        id: number,
        name: string,
        storageId: number,
        createdAt: Date,
        updatedAt: Date,
        Storage: {
            id: number,
            name: string,
            location: string,
            createdAt: Date,
            updatedAt: Date,
        }
    }
}
