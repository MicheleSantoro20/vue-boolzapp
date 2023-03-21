const DateTime = luxon.DateTime;

const { createApp } = Vue

createApp({
  data() {
    return {

      dropContent: document.getElementById('dropdown-content'),
      elementoSelezionato : 0,
      rispostePc : ['ok!', 'ben fatto!', 'ottimo lavoro!', 'come stai?', 'vado via, ciaooo!', 'Gravi tumulti hanno travolto la galassia a causa della tassazione sulle rotte mercantili verso i sistemi stellari periferici. Lingorda federazione dei mercanti, sperando di risolvere la questione, ha schierato micidiali astronavi da guerra per impedire tutte le spedizioni nel piccolo pianeta di Naboo. Mentre il congresso della Repubblica discute senza sosta l allarmante succedersi degli eventi, il cancelliere supremo ha inviato segretamente nella Galassia due Cavalieri Jedi, i guardiani della pace e della giustizia, per risolvere il conflitto.' ],
      isActive: false,
      indexMsg: "",
      newMessage: "",
      filtro: "",
      contacts: [
            {
            name: 'Michele',
            avatar: './img/avatar_1.jpg',
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Hai portato a spasso il cane?',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Ricordati di stendere i panni',
            status: 'sent'
            },
            {
            date: '10/01/2020 16:15:22',
            message: 'Tutto fatto!',
            status: 'received'
            }
            ],
            },
            {
            name: 'Fabio',
            avatar: './img/avatar_2.jpg',
            visible: true,
            messages: [
            {
            date: '20/03/2020 16:30:00',
            message: 'Ciao come stai?',
            status: 'sent'
            },
            {
            date: '20/03/2020 16:30:55',
            message: 'Bene grazie! Stasera ci vediamo?',
            status: 'received'
            },
            {
            date: '20/03/2020 16:35:00',
            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'sent'
            }
            ],
            },
            {
            name: 'Samuele',
            avatar: './img/avatar_3.jpg',
            visible: true,
            messages: [
            {
            date: '28/03/2020 10:10:40',
            message: 'La Marianna va in campagna',
            status: 'received'
            },
            {
            date: '28/03/2020 10:20:10',
            message: 'Sicuro di non aver sbagliato chat?',
            status: 'sent'
            },
            {
            date: '28/03/2020 16:15:22',
            message: 'Ah scusa!',
            status: 'received'
            }
            ],
            },
            {
            name: 'Alessandro B.',
            avatar: './img/avatar_4.jpg',
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Si, ma preferirei andare al cinema',
            status: 'received'
            }
            ],
            },
            {
            name: 'Alessandro L.',
            avatar: './img/avatar_5.jpg',
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Ricordati di chiamare la nonna',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Va bene, stasera la sento',
            status: 'received'
            }
            ],
            },
            {
            name: 'Claudia',
            avatar: './img/avatar_io.jpg',
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Ciao Claudia, hai novità?',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Non ancora',
            status: 'received'
            },
            {
            date: '10/01/2020 15:51:00',
            message: 'Nessuna nuova, buona nuova',
            status: 'sent'
            }
            ],
            },
            {
            name: 'Federico',
            avatar: './img/avatar_7.jpg',
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Fai gli auguri a Martina che è il suo compleanno!',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Grazie per avermelo ricordato, le scrivo subito!',
            status: 'received'
            }
            ],
            },
            {
            name: 'Davide',
            avatar: './img/avatar_8.jpg',
            visible: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Ciao, andiamo a mangiare la pizza stasera?',
            status: 'received'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
            status: 'sent'
            },
            {
            date: '10/01/2020 15:51:00',
            message: 'OK!!',
            status: 'received'
            }
            ],
            }
            ]  
    }
  },
  methods : {

    chat(index) {
      this.elementoSelezionato = index;
      console.log (this.elementoSelezionato)
    },

    addMessage() {
      if (this.newMessage.length > 0){
        if (this.elementoSelezionato >= 0) {
          this.contacts[this.elementoSelezionato].messages.push({message:this.newMessage, status:'sent', date:DateTime.now().setLocale('it').toLocaleString(DateTime.TIME_24_WITH_SECONDS),});
          this.newMessage = "";
          this.receivedMessage();
        }
      }

    },

    receivedMessage() {
      setTimeout(()=>{
        this.contacts[this.elementoSelezionato].messages.push({message:this.rispostePc[this.randomNumber()], status:'received', date:DateTime.now().setLocale('it').toLocaleString(DateTime.TIME_24_WITH_SECONDS),});
      }, 1000);

    },

    filter() {
      this.contacts.forEach(element =>{
       if (element.name.toLowerCase().includes(this.filtro.toLowerCase())) {
        element.visible = true;
       } else {
        element.visible = false;
       }
      } )
    },

    removeMessage(indexMsg) {
        if (this.elementoSelezionato >= 0) {
          this.contacts[this.elementoSelezionato].messages.splice(this.indexMsg, 1);
        }
        this.indexMsg = null;
    },

    active(index) {
      this.indexMsg = index;
      this.isActive = !this.isActive;
    },

    randomNumber() {
      let numero = Math.floor( Math.random()* 6) + 0;
      return numero;
    }
}
}).mount('#app')