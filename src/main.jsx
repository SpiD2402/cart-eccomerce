import { createRoot } from 'react-dom/client'
import './App.css'
import {Provider} from "react-redux";

import {Ecommerce} from "./Ecommerce.jsx";
import {store} from "./store/store.js";

createRoot(document.getElementById('root')).render(

      <Provider store={store}>
          <Ecommerce/>
      </Provider>

)
