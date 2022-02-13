// import React, { useState } from 'react';
// import { useCookies } from 'react-cookie';

// const Cookie = () => {
//    const [name, setName] = useState('');
//    const [pass, setPass] = useState('');
//    const [cookies, setCookie] = useCookies(['user']);

//    const handle = () => {
//       setCookie('Name', name, { path: '/' });
//       setCookie('Password', pass, { path: '/' ,expires: new Date(Date.now())});
//    };
//    return (
//       <div className="text-center m-lg-5">
//       <label>Name  </label>
//       <input
//          placeholder="name"
//          value={name}
//          onChange={(e) => setName(e.target.value)}
//       /><br/>
//       <label className="m-lg-2">Password</label>
//       <input
//          type="password"
//          placeholder="name"
//          value={pass}
//          onChange={(e) => setPass(e.target.value)}
//       />
//       <div>
//          <button className="btn btn-outline-warning m-lg-2" onClick={handle}>Set Cookie</button>
//       </div>
//    </div>
//    );
// };
// export default Cookie;