const app = new Vue({
    el : '#app',
    name : 'Vue application todo list',
    data : {
        activeUser : {},
        users : [
            {
                id :1,
                name : 'Hüseyin',
                surname :'Tekin',
                email : 'hsyn@gmail.com',
                phone : '5525663130',
                rol : 'Admin',
            },
            {
                id :2,
                name : 'Ahmet',
                surname :'Tekin',
                email : 'hsyn@gmail.com',
                phone : '5525663130',
                rol : 'User',
            },
            {
                id :3,
                name : 'Yusuf',
                surname :'Tekin',
                email : 'hsyn@gmail.com',
                phone : '5525663130',
                rol : 'User',
            },
        ],
        rols : ['Admin', 'User']
    },
    methods:{
        addUser()
        {
            this.activeUser = {}
            $('#usersModal').modal('show');
        },
        userSave()
        {
            if(this.activeUser.name != undefined && this.activeUser.surname != undefined && this.activeUser.phone != undefined && this.activeUser.email !=undefined && this.activeUser.rol != undefined)
            {
                if (this.activeUser.id >0)
                {
                    var user = this.users.find(x=>x.id == this.activeUser.id);
                    this.activeUser = user;
                    $('#usersModal').modal('hide');
                }
                else
                {
                    this.users.push({
                        id : this.users.length + 1,
                        name : this.activeUser.name,
                        surname : this.activeUser.surname,
                        phone : this.activeUser.phone,
                        email : this.activeUser.email,
                        rol : this.activeUser.rol,
                    });
                    this.activeUser = {};
                    $('#usersModal').modal('hide');
                }
            }

        },
        /*Delet(index)
        {
            this.users.splice(index, 1)
        }*/
        Delet(id)
        {
            const usr = this.users.find(x=>x.id == id)
            if (usr != null)
            {
                this.users = this.users.filter(x =>x.id != usr.id)
            }
        },
        Update(index)
        {
            this.activeUser = this.users[index];
            $('#usersModal').modal('show');
        }
    }
});