import {
  ChatAlt2Icon,
  CogIcon,
  DocumentTextIcon,
  HomeIcon,
  ReceiptRefundIcon,
  ReceiptTaxIcon,
  SaveIcon,
  UsersIcon,
} from "@heroicons/react/outline";
import { Fragment } from "react";
import Logo from "../assets/logo.png";
import Routing from "../routes";
import { useNavigate } from "react-router-dom";

export default function Layout() {
  const navigate = useNavigate();

  return (
    <Fragment>
      <div className="grid grid-cols-7 h-full bg-gray-100">
        <div
          className="w-full bg-green-500 h-full flex flex-col justify-start items-center py-10"
          style={{ boxShadow: "3px 3px 3px rgba(0,0,0,.2)" }}
        >
          <img src={Logo} alt="PA Rifas" className="w-1/2" />

          <span className="font-bold text-orange-500 mt-5 font-serif text-3xl">
            PA RIFAS
          </span>
          <span className="font-bold text-white font-serif">RIFAS ONLINE</span>

          <div className="flex flex-col w-full mt-16 px-3 gap-3">
            <button
              className="btn flex items-center text-green-500 w-full bg-white rounded-md px-2 py-1 hover:bg-gray-100 active:bg-white"
              onClick={() => navigate("/")}
            >
              <HomeIcon className="w-5 h-5" />
              <span className="font-bold ml-2 text-base">INÍCIO</span>
            </button>
            <button
              className="btn flex items-center text-green-500 w-full bg-white rounded-md px-2 py-1 hover:bg-gray-100 active:bg-white"
              onClick={() => navigate("/petitions")}
            >
              <ReceiptRefundIcon className="w-5 h-5" />
              <span className="font-bold ml-2 text-base">PEDIDOS</span>
            </button>
            <button
              className="btn flex items-center text-green-500 w-full bg-white rounded-md px-2 py-1 hover:bg-gray-100 active:bg-white"
              onClick={() => navigate("/newraffle")}
            >
              <SaveIcon className="w-5 h-5" />
              <span className="font-bold ml-2 text-base">CRIAR RIFA</span>
            </button>
            <button className="btn flex items-center text-green-500 w-full bg-white rounded-md px-2 py-1 hover:bg-gray-100 active:bg-white">
              <DocumentTextIcon className="w-5 h-5" />
              <span className="font-bold ml-2 text-base">RIFAS</span>
            </button>
            <button className="btn flex items-center text-green-500 w-full bg-white rounded-md px-2 py-1 hover:bg-gray-100 active:bg-white">
              <UsersIcon className="w-5 h-5" />
              <span className="font-bold ml-2 text-base">CLIENTES</span>
            </button>
            <button className="btn flex items-center text-green-500 w-full bg-white rounded-md px-2 py-1 hover:bg-gray-100 active:bg-white">
              <ReceiptTaxIcon className="w-5 h-5" />
              <span className="font-bold ml-2 text-base">ORDENS</span>
            </button>
            <button className="btn flex items-center text-green-500 w-full bg-white rounded-md px-2 py-1 hover:bg-gray-100 active:bg-white">
              <ChatAlt2Icon className="w-5 h-5" />
              <span className="font-bold ml-2 text-base">MENSAGENS</span>
            </button>
            <button className="btn flex items-center text-green-500 w-full bg-white rounded-md px-2 py-1 hover:bg-gray-100 active:bg-white">
              <CogIcon className="w-5 h-5" />
              <span className="font-bold ml-2 text-base">CONFIGURAÇÕES</span>
            </button>
          </div>
        </div>
        <div className="col-span-6 max-h-screen relative overflow-hidden">
          <Routing />
        </div>
      </div>
    </Fragment>
  );
}
