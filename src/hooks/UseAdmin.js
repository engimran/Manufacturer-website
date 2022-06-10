import { useEffect, useState } from "react"

const UseAdmin = user => {
    const [admin, setAdmin] = useState(false);
    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(`https://afternoon-eyrie-61181.herokuapp.com/admin/${email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    setAdmin(data.admin)
                })
        }

    }, [user])
    return [admin];
}

export default UseAdmin;
