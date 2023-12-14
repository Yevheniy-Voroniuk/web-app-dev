class UserDto {
    id;
    name;
    surname;
    email;
    password;
    phone;
    role;
    wishList;

    constructor(model) {
        this.id = model.id;
        this.name = model.name;
        this.surname = model.surname;
        this.email = model.email;
        this.password = model.password;
        this.phone = model.phone;
        this.role = model.role;
        this.wishList = model.wishList;
    }
}

export default UserDto;