export interface Recipe {
    recipeId?: number
    createTimestamp?: Date,
    name?: string,
    isVeg?: boolean,
    noOfPeopleCanEat?: number,
    ingredients?: string,
    instructions?: string,
}