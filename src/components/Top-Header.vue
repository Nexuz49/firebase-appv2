<template>
    <div>
        <br>  <!--Logged In-->
        <span v-if="loggedIn"><button @click="signOut">Sign Out</button></span>
        <span v-else></span>  <!--No-->
        <div>                      <!--  v-if="firebase.auth().currentUser"   -->
            <!--<button @click="signOut">Sign Out</button>-->
        </div>
    </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
export default {
    created() {
        firebase.auth().onAuthStateChanged(user=> {
            this.loggedIn = !!user;
            // if(user){
            //     this.loggedIn = true;
            // } else {
            //     this.loggedIn = false;
            // }
        })
    },
    data() {
        return {
            loggedIn: false
        }
    },
    methods: {
        async signOut() {
            try {
                const data = await firebase.auth().signOut();
                console.log(data);
                this.$router.replace({name: "Login"})
            } catch (err) {
                console.log(err)
            }
            
        }
    }

}
</script>


<style lang="scss" scoped>

</style>