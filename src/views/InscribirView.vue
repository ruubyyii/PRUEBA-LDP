<template>
    <section>
        <form @submit.prevent="valores" action="">
            <h1>¡REGISTRA A TU EQUIPO!</h1>
            <!-- NOMBRE DEL EQUIPO -->
            <div id="nombre_equipo">
                <span>Nombre del equipo:</span>
                <input v-model="equipo" placeholder="Ej: G2" type="text">
            </div>
            <!-- NOMRBE DE LOS JUGADORES -->
            <div id="nombre_jugadores">
                <span>Nombre de los jugadores:</span>
                <div id="jugadores">
                    <!-- JUGADOR 1 -->
                    <div id="linea_nombre">
                        <div id="linea">
                            <label for="">Linea:</label>
                            <select v-model="posicion" name="" id="">
                                <option value="TOP">TOP</option>
                                <option value="JUNG">JUNG</option>
                                <option value="MID">MID</option>
                                <option value="ADC">ADC</option>
                                <option value="SUP">SUP</option>
                            </select>
                        </div>
                        <div id="nombre">
                            <label for="">Nombre del jugador:</label>
                            <input v-model="nombre_jugador" placeholder="Ej: Caps" type="text">
                        </div>
                        <button type="button" @click="añadirJugador">Agregar jugador</button>
                    </div>
                </div>
            </div>
            <!-- DESCRIPCION -->
            <div id="descripcion">
                <label for="">Breve descripcion:</label>
                <textarea v-model="descripcion" placeholder="Empieza a escribir aqui.." name="" id="" cols="30" rows="10"></textarea>
            </div>
            <!-- LOGO -->
            <div id="logo">
                <label for="">URL del logo:</label>
                <input v-model="logo" placeholder="Tu URL" type="text">
                <img :src=this.logo alt="">
            </div>
            <button type="sumbit">Registrarse</button>
        </form>
    </section>
</template>

<script>
import { db } from "@/db/firebase";  
import { collection, addDoc } from "firebase/firestore"; 
import { useToast } from "vue-toastification";
export default {
    name:'InscribirView',
    data(){
        return{
            cont: 0,
            equipo: '',
            posicion: '',
            nombre_jugador: '',
            jugadores: [],
            descripcion: '',
            logo: '',
            jugador: {
                
            }
        }
    },
    methods:{
        añadirJugador(){

            if (this.cont >= 5){
                this.toast.error('NO PUEDEN HABER MAS DE 5 JUGADORES LERDO!!')
            }else{
                this.jugador = {
                'posicion': this.posicion,
                'nombre': this.nombre_jugador
                }

                this.jugadores.push(this.jugador)
                console.log(this.jugadores);
                this.cont++
            }

            this.posicion = ''
            this.nombre_jugador = ''
        },
        async valores() {
            try {
                const nuevoEquipo = {
                    nombre: this.equipo,
                    descripcion: this.descripcion,
                    logo: this.logo,
                    jugadores: this.jugadores
                };

                // Guarda el nuevo equipo en Firestore
                await addDoc(collection(db, "equipos"), nuevoEquipo);

                this.toast.success("Equipo registrado correctamente!");

                // Reiniciar el formulario
                this.equipo = "";
                this.descripcion = "";
                this.logo = "";
                this.jugadores = [];
                this.cont = 0;

            } catch (error) {
                this.toast.error("Error al registrar el equipo");
                console.error("Error al guardar en Firestore:", error);
            }
        }
    },
    setup() {
        const toast = useToast();
        return { toast }
    }
}
</script>