import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

//https://api.github.com/users/FelipeDuranl/repos

const repository = {
    name: 'unform',
    description: 'Forms in React',
    link: 'https://github.com/unform/unform'
}

export function RepositoryList(){
    // const [repositories, setRespositories] = useState([]);

    // useEffect(() =>{
    //     fetch('https://api.github.com/users/FelipeDuranl/repos')
    //     .then(response => response.json())
    //     ,then(data => console.log(data))
    // }, []);

    return  (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>

            <ul>
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
            </ul>

        </section>
    );
}