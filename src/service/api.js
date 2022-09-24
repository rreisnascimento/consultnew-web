const BASE_API = "https://consultnew-api.herokuapp.com";

export default {
    createParceiro: async (nome, clinica, especialidade, cep, endereco, complemento, bairro, cidade, uf, comercial, celular, email) => {
        const req = await fetch(`${BASE_API}/precadastro/create`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nome, clinica, especialidade, cep, endereco, complemento, bairro, cidade, uf, comercial, celular, email })
        });
        const json = await req.json();
        return json;
    }
    // checkToken: async (token) => {
    //     const req = await fetch(`${BASE_API}/auth/refresh`, {
    //         method: 'POST',
    //         headers: {
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({token})
    //     });
    //     const json = await req.json();        
    //     return json;
    // },
    // signIn: async (email, password) => {
    //     const req = await fetch(`${BASE_API}/auth/login`, {
    //         method: 'POST',
    //         headers: {
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({email, password})
    //     });
    //     const json = await req.json();        
    //     return json;
    // },
    // signUp: async (name, email, password) => {
    //     const req = await fetch(`${BASE_API}/user`, {
    //         method: 'POST',
    //         headers: {
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({name, email, password})
    //     });
    //     const json = await req.json();        
    //     return json;
    // },
    // getBarbers: async (lat=null, lng=null, address=null) => {
    //     const token = await AsyncStorage.getItem('token');

    //     console.log("LAT", lat);
    //     console.log("LNG", lng);
    //     console.log("ADDRESS", address);

    //     const req = await fetch(`${BASE_API}/barbers?token=${token}&lat=${lat}&lng=${lng}&address=${address}`);
    //     const json = await req.json();
    //     return json;
    // }
};