<template>
  

  <v-container fluid> 
      <v-form>
          <v-file-input label="Selecione o arquivo" prepend-icon="mdi-message-text" outlined append-outer-icon="mdi-send" multiple chips v-model="files" @click:append-outer="processSubtitles"></v-file-input>
      </v-form>
      <div class="pills" >
          <Pill v-for="word in groupedWords" :key="word.name" 
          
          :name="word.name" :amount="word.amount" />
          
      </div>
  </v-container>
</template>

<script>
/*||const {ipcRenderer} = require('electron') */ import{ipcRenderer} from 'electron'

import Pill from "./Pill"
export default {
  components:{
Pill
  },
    data:function(){
      
        return{
              files:[],
            groupedWords:[
          
            ]
        }
    },
    methods:{
        processSubtitles(){
           const paths= this.files.map(f=>f.path)
            ipcRenderer.send('processamentoLegenda',paths)
            ipcRenderer.on('processamentoLegenda',(event,resp)=>{
                this.groupedWords=resp
            })        }
    }

}
</script>

<style>
.pills{
    display: flex;
    flex-wrap: wrap;
    

}
</style>