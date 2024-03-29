import React from 'react'
import { collection, onSnapshot, query, orderBy, limit } from "@firebase/firestore";
import { db } from '../firebase';
import { useEffect, useState } from 'react'

const Suggestions = () => {
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => 
         onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc'), limit(5)), snapshot => {
            setSuggestions(snapshot.docs);
        }
        ),
         [db]
         );

  return (
    <div className="mt-4 ml-10">
        <div className="flex justify-between text-sm mb-5">
            <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
            <button className="text-gray-600 font-semibold">See All</button>
        </div>

        {suggestions.map((profile) => (
            <div key={profile.id} className="flex items-center justify-between mt-3">
                    <img className="w-10 h-10 rounded-full border p-[2px]" src={profile.data().image} alt="" />
                    <div className="flex-1 ml-4">
                        <h2 className="p-2 font-semibold text-sm">{profile.username}</h2>
                        <h3 className="text-xs text-gray-400">Works at United States</h3>
                    </div>
                    <button className="text-blue-400 text-xs font-bold">Follow</button>
                </div>
        ))}

    </div>
  )
}

export default Suggestions