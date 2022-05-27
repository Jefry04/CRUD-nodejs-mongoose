const {Schema, model, models} = require ("mongoose");

const emailRegex = new RegExp("[a-zA-Z0-9]{5,}@[a-z]{3,5}.com?");
const passwordRegex = new RegExp("^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$")
const nameRegex = new RegExp("[a-zA-Z]+")
const numberRegex = new RegExp("[0-9]")

const  userSchema = new Schema (
    {
     rol:{
        required: true,
        type: String,
        enum: {
            values: ["admin", "superadmin", "user"],
            message: "Es un rol invalido",
          }
    },
     email:{
        type: String,
        required: true,
        match: [emailRegex, "Email Invalido"],
        validate: [
            {
              validator(value) {
                return models.User.findOne({ email: value })
                  .then((user) => !user) // user === null = falsyValue
                  .catch(() => false);
              },
              message: "Ya existe un usuario registrado con ese correo",
            },
          ],
        },
     password:{
         required:true,
         type:String,
         match: [passwordRegex, "No cumple con las caracteristicas"],
        },
     name:{
         required:true,
         type: String,
         maxlength: [10, "maximo de 10 caracteres"],
         match: [nameRegex, "No debe contener numeros"]
        },
     phone: {
        required:true,
        type: Number,
        maxlength: [12, "maximo de 12 caracteres"],
        match: [numberRegex, "No debe contener letras"]},
    },
    {
        timestamps:true,
    }
)

const User = model("User",userSchema );

module.exports = User;