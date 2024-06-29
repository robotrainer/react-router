import {redirect} from "react-router-dom";

export function loginAction(authContext) {
  return async ({request}) => {
    const {setUser} = authContext;

    const formData = await request.formData();
    const data = Object.fromEntries(formData);
  
    const fetchData = await fetch(`https://jsonplaceholder.typicode.com/users?username=${data.username}`);
    const user = await fetchData.json();
  
    if (!user.length) {
      return null;
    }

    return user;
    // setUser(user[0]);
  
    // return redirect("/");
  }
}