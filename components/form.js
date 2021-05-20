app.component('comp',{
    template: /*html*/
    `
    <div class="row">
        <div class="col-6 text-center">
            <h1 class="bg-warning text-dark">Historias de Alex</h1>
            <input type="text" v-model="historiaAlex" class="form-control w-50 mx-auto" placeholder="Escriba su historia aquí">
            <h2>Tu historia: {{historiaAlex}}</h2>
            <button @click="guardarAlex" class="btn btn-outline-warning m-2">Guardar Historia</button>
            <br>
        </div>

        <div class="col-6 text-center">
            <h1 class="bg-info text-dark">Historias de Juan</h1>
            <input type="text" v-model="historiaJuan" class="form-control w-50 mx-auto" placeholder="Escriba su historia aquí">
            <h2>Tu historia: {{historiaJuan}}</h2>
            <button @click="guardarJuan" class="btn btn-outline-info m-2">Guardar Historia</button>
            <br>
        </div>
    </div>
    
    <div class="row">
        <div class="col-12 text-center">
            <h2>Todas las historias:</h2>
            <div class="card text-dark m-2 w-50 mx-auto text-dark fw-bold" v-for="item in arrayAlex" style="background-color: #FFEBA9">Alex: {{item}}</div>
            <div class="card text-dark m-2 w-50 mx-auto text-dark fw-bold" v-for="item in arrayJuan" style="background-color: #A9D8FF">Juan: {{item}}</div>
        </div>
    </div>
    `,
    data(){
        return {
            historiaAlex: "",
            libreriaAlex: "",
            arrayAlex: [],
            historiaJuan: "",
            libreriaJuan: "",
            arrayJuan: []
        }
    },
    methods: {
        guardarAlex(){
            if(this.historiaAlex != "")
            {
                this.libreriaAlex = this.historiaAlex;
                this.arrayAlex.push(this.historiaAlex);
            }

            if(this.arrayAlex != "")
            {
                this.historiaAlex = "";
                this.libreriaAlex = "";
                localStorage.setItem('historiasAlex', this.arrayAlex)
            }

            console.log(this.arrayAlex)
        },
        guardarJuan(){
            if(this.historiaJuan != "")
            {
                this.libreriaJuan = this.historiaJuan;
                this.arrayJuan.push(this.historiaJuan);
            }

            if(this.arrayJuan != "")
            {
                this.historiaJuan = "";
                this.libreriaJuan = "";
                localStorage.setItem('historiasJuan', this.arrayJuan)
            }

            console.log(this.arrayJuan)
        }
    }
})