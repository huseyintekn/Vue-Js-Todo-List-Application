const app = new Vue({
    el: '#app',
    name: 'Todo List',
    data: {
        dataItem:{title:'', status:false},
        datalists: [
            {id:1, title:'Laravel product classı yapılacak.', status:true, menuId:1},
            {id:2, title:'Laravel category classı yapılacak.', status:false, menuId:1},
            {id:3, title:'Laravel helper classı yapılacak.', status:false, menuId:1},
            {id:4, title:'Boostrap ile teamplet yapılacak.', status:false, menuId:2},
            {id:5, title:'Vuejs ile örnek çalışmalar yapılacak.', status:true, menuId:3},
        ],
        menuLists: [
            {id:1, title:'Laravel'},
            {id:2, title:'Boostrap'},
            {id:3, title:'Vuejs'},
        ],
        menuActives:{},
        datalistsActive: {},
        newMenuItem: {}
    },
    created() {
        const menudefault = this.menuLists[0];
        if (menudefault != null){
            this.menuActive(menudefault.id)
        }
    },
    methods : {
        statusTrue(index){
            this.datalistFalse[index].status = !this.datalistFalse[index].status;
        },
        statusFalse(index){
            this.datalistTrue[index].status = !this.datalistTrue[index].status;
        },
        dataSave(){
            if (this.dataItem.title !== ''){
                this.dataItem.menuId = this.menuActives.id;
                this.dataItem.id = this.datalists.length + 1;
                this.datalists.push(this.dataItem);
                this.clearForm();
                this.menuActive(this.menuActives.id)
            }
        },
        clearForm(){
            this.dataItem = {title:'', status:false}
        },
        Delete(id){
            this.datalists = this.datalists.filter(todo => todo.id !== id);
            this.menuActive(this.menuActives.id)
        },
        menuActive(id){
            let menuActive = this.menuLists.find(x => x.id === id);
            if (menuActive != null){
                this.menuActives = menuActive;
                this.datalistsActive = this.datalists.filter(item => item.menuId === id)
            }
        },
        menuSave(){
            if (this.newMenuItem.title != null){
                this.newMenuItem.id = this.menuLists.length + 1;
                this.menuLists.push(this.newMenuItem);
                this.newMenuItem = {};
            }
        },
        datalistCount(menuId){
            return this.datalists.filter(item => item.menuId === menuId).length;
        }
    },
    // computed hesaplanan özellikler method yardımıyla status değerlerine göre verileri yazdıracağız.
    computed: {
        datalistTrue(){
            return this.datalistsActive.filter(todo => todo.status === true);
        },
        datalistFalse(){
            return this.datalistsActive.filter(todo => todo.status === false);
        }
     }

})