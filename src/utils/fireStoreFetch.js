import { db } from "../utils/firebaseConfig";
import { collection, getDocs, query, where, doc, getDoc  } from "firebase/firestore";

export const fireStoreFetch = async (idCat) =>{
    let q
    if(idCat) {
        q = query (collection(db, "data"), where('categoryId', '==', idCat))
    } else {
        q = query (collection(db, "data"))
    }
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map (item => ({
    id: item.id,
    ...item.data()
    }))
    }
    
    
    export const fireStoreFetchOne = async (idItem) =>{
            const docRef = doc(db, "data", idItem);
            const docSnap = await getDoc(docRef);
            
            if (docSnap.exists()) {
                return {
                    id: idItem,
                    ...docSnap.data()
                }
            } else {
              console.log("No such document!");
            }
        }