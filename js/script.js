import { Item } from "../components/item.js";
import { movies } from "./db.js";
import { reload } from "./utils.js";


const cont = document.querySelector('.promo__interactive-list')

reload(movies,cont,Item)