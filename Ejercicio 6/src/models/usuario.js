import mongoose from 'mongoose';
const { Schema } = mongoose;

const usuarioSchema = new Schema ({
    user: String,
    password: String
});

const Usuario = mongoose.model("Usuario", usuarioSchema);

export default Usuario;