import { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { ShoppingCardContext } from "../../context";
import "./Style.css";

const Productos = () => {
  const context = useContext(ShoppingCardContext);

  return (
    <aside
      className={`${
        context.isProductosOpen ? 'flex' : 'hidden'
      } Productos flex flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detalle</h2>
        <div>
          <XMarkIcon className="h-6 w-6 text-black"></XMarkIcon>
        </div>
      </div>
    </aside>
  );
};

export default Productos;
