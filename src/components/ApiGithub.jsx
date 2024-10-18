import React, { useState, useEffect } from 'react';

export default function ApiGithub () {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    
      const res = await fetch("https://api.github.com/users/github-john-doe");
      const json = await res.json();
      setUsers(json);
  };

  return (
    <div className="d-flex justify-content-center align-items-center ">
        <div className="card " style={{ maxWidth: '30rem' }}>
        <h2 className="card-title pt-2">{users.name}</h2>
        <img src={users.avatar_url} className="card-img-top p-5" alt={`${users.login}'s avatar`} />
        <div className="card-body">
          
          <p className="card-text">
          <div><b>Login : {users.login} </b></div>
          <div><b>Bio :</b> {users.bio} </div>
          <div className='py-3'><b>URL du profil : <a href={users.html_url} target="_blank" rel="noopener noreferrer">{users.html_url}</a> </b></div>

            <div><b>Followers :</b> {users.followers} </div>
            <div><b>Créé le :</b> {new Date(users.created_at).toLocaleDateString()} </div>
            <div><b>Dernière mise à jour le :</b> {new Date(users.updated_at).toLocaleDateString()}</div>
          </p>
        </div>
      </div>
    </div>
  );
};

