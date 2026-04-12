interface User {
    name: string;
}

type User1 =  {
    name: string;
    class?: number;
};
interface Admin extends User {
    permission: string;
}

const a:User1 = {
    name: "Foo",
    class: 10,
}