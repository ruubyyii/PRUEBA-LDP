<template>
    <section>
        <form @submit.prevent="valores" action="">
            <h1>LOGIN</h1>
            <h3>SOLO ADINISTRADORES</h3>
            <div id="email">
                <label for="">Email:</label>
                <input v-model="email" placeholder="Introduce tu email.." type="text">
            </div>
            <div id="password">
                <label for="">Password:</label>
                <input v-model="password" placeholder="Introduce tu contraseña..." type="text">
            </div>
            <button type="sumbit">Inicia Sesion</button>
        </form>
    </section>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useToast } from "vue-toastification";
export default {
    name: 'AdminView',
    data(){
        return{
            email: '',
            password: ''
        }
    },
    methods:{
        async valores() {
            const auth = getAuth(); // Obtén la instancia de autenticación de Firebase
            try {
                const userCredential = await signInWithEmailAndPassword(auth, this.email, this.password);
                // Si el inicio de sesión es exitoso:
                console.log("Usuario autenticado:", userCredential.user);
                this.error = null; // Limpia errores previos
                this.toast.success("Sesion iniciada con exito!!");

                this.$router.push('perfil-admin')
            } catch (err) {
                // Si hay error en la autenticación:
                this.error = "Email o contraseña incorrectos.";
                this.toast.error(this.error);
            }
        },
    },
    setup() {
        const toast = useToast();
        return { toast }
    }
}
</script>

<style>

</style>