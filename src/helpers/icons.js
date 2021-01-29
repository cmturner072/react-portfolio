import { 
    faTrash, 
    faSignOutAlt, 
    faEdit, 
    faFan, 
    faPlus,
    faPhone,
    faAddressBook,
    faPaperPlane 
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";


const Icons = () => {
return library.add(faTrash, faSignOutAlt, faEdit, faFan, faPlus, faPhone, faAddressBook, faPaperPlane);
};

export default Icons;