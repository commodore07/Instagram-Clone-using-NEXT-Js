import { useEffect, useState } from 'react'
import { collection, onSnapshot, query, orderBy } from "@firebase/firestore";
import { db } from '../firebase';
import Story from "./Story";
import { useSession } from "next-auth/react"

const Stories = () => {
    const [suggestions, setSuggestions] = useState([]);
    const { data: session } = useSession();

    useEffect(() => 
         onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')), snapshot => {
            setSuggestions(snapshot.docs);
        }
        ),
         [db]
         );

    
  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
        {session && (
            <Story img={session.user.image} username={session.user.username} />
        )}
        {suggestions.map((profile) => (
            <Story key={profile.id} img={profile.data().image} username={profile.data().caption} />
        ))}
    </div>
  )
}

export default Stories