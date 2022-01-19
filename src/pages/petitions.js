import {
  CheckIcon,
  PencilIcon,
  ReceiptRefundIcon,
  SaveIcon,
  SelectorIcon,
} from "@heroicons/react/outline";
import { Fragment, useEffect, useState } from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import { Transition, Listbox, Dialog, RadioGroup } from "@headlessui/react";
import useFetch from "../hooks/useFetch";
import { useHistory } from "react-router-dom";
import api from "../configs/axios";
import { mutate as mutateGlobal } from "swr";
import DialogApp from "../components/Dialog";

export default function Petitions() {
  const { push } = useHistory();
  const [select, setSelect] = useState("");
  const [search, setSearch] = useState("");
  const { data, mutate } = useFetch(
    `/findPetitions/${select === "" ? "all" : select}/${
      search === "" ? "1" : search
    }
    }`
  );

  const [petitions, setPetitions] = useState([]);

  const [modalPayment, setModalPayment] = useState(false);
  const [idToChange, setIdToChange] = useState("");
  const [selected, setSelected] = useState("");
  const [loading, setLoading] = useState(false);

  const [dialog, setDialog] = useState({});

  const updateStatus = async () => {
    setLoading(true);
    try {
      const response = await api.put(`/updatePetitionStatus/${idToChange}`, {
        status: selected,
      });
      const updated = await data.map((pet) => {
        if (pet.identify === idToChange) {
          return { ...pet, status: selected };
        }
        return pet;
      });
      mutate(updated, false);
      mutateGlobal(`/updatePetitionStatus/${idToChange}`, {
        identify: idToChange,
        status: selected,
      });
      setModalPayment(false);
      setLoading(false);
      handleDialog(true, "Sucesso", response.data.message, "success");
    } catch (error) {
      setModalPayment(false);
      setLoading(false);
      console.log(error);
    }
  };

  const handleSelect = () => {
    if (select === "cpf") {
      return "Buscar por CPF";
    }
    if (select === "number") {
      return "Buscar por Número";
    }
    if (select === "all") {
      return "Buscar Todos";
    }
    if (select === "") {
      return "Selecione uma Opção";
    }
  };

  const handleDialog = (open, title, message, type) => {
    setDialog({ open, title, message, type });
  };

  useEffect(() => {
    if (data) {
      setPetitions(data);
    }
  }, [data]);

  const handleStatus = (id, status) => {
    setIdToChange(id);
    setSelected(status);
    setModalPayment(true);
  };

  return (
    <Fragment>
      <Header
        icon={<ReceiptRefundIcon />}
        title={"PEDIDOS DE CRIAÇÃO DE RIFA"}
      />
      <div className="pt-20 px-3 pb-3 overflow-auto max-h-full">
        <div className="flex mb-5 flex-col p-3 bg-white rounded-md shadow-md">
          <label className="text-sm text-gray-700 mb-2 block">
            Busca Avançada
          </label>
          <div className="grid grid-cols-5 gap-5">
            <div className="col-span-1">
              <Listbox
                value={select}
                onChange={(e) => {
                  setSelect(e);
                }}
              >
                <div className="relative">
                  <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-1 pr-10 py-2 text-left cursor-pointer focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm">
                    <span className="ml-3 block truncate text-gray-700">
                      {handleSelect()}
                    </span>
                    <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <SelectorIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                      <Listbox.Option
                        value="number"
                        className="cursor-pointer select-none relative py-1 pl-3 pr-9 text-gray-700 hover:bg-gray-200"
                      >
                        Buscar por Número
                      </Listbox.Option>
                      <Listbox.Option
                        value="all"
                        className="cursor-pointer select-none relative py-1 pl-3 pr-9 text-gray-700 hover:bg-gray-200"
                      >
                        Buscar Todos
                      </Listbox.Option>
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>
            <div className="col-span-4">
              <input
                className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm px-3 py-2 text-left cursor-text focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Digite o número para buscar"
                disabled={select === "all" && true}
                value={search}
                type={"number"}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="shadow-md overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-white">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-2"
                >
                  Nº
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-80"
                >
                  CLIENTE
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  TELEFONE
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  QTD NÚMEROS
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  VALOR
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  PAGAMENTO
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-20"
                >
                  AÇÕES
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {petitions.map((pet) => (
                <tr key={pet.id}>
                  <td className="px-6 py-2 whitespace-nowrap w-2 text-sm text-gray-700">
                    {pet.id}
                  </td>
                  <td className="px-6 py-2 whitespace-nowrap w-80 text-sm text-gray-700">
                    {pet.client_name}
                  </td>
                  <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-700">
                    {pet.client_phone}
                  </td>
                  <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-700">
                    {pet.qtd_numbers}
                  </td>
                  <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-700">
                    {parseFloat(pet.total_to_pay).toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </td>
                  <td
                    className={`px-6 py-2 whitespace-nowrap text-sm text-gray-700 w-20 ${
                      (pet.status === "waiting" && "bg-orange-500") ||
                      (pet.status === "paid_out" && "bg-green-500") ||
                      (pet.status === "reproved" && "bg-red-500")
                    }`}
                  >
                    <div className="flex items-center text-white justify-between w-full">
                      <span>
                        {(pet.status === "waiting" && "AGUARDANDO") ||
                          (pet.status === "paid_out" && "CONFIRMADO") ||
                          (pet.status === "reproved" && "RECUSADO")}
                      </span>
                      <button
                        className="btn bg-gray-200 rounded-full p-1 cursor-pointer ml-2 hover:bg-gray-300 active:bg-gray-200 shadow-sm"
                        onClick={() => handleStatus(pet.identify, pet.status)}
                      >
                        <PencilIcon className="w-4 h-4 text-gray-800" />
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-700 w-20">
                    <Button
                      size="sm"
                      full={true}
                      icon={<SaveIcon />}
                      onClick={() => push(`/newraffle/${pet.identify}`)}
                    >
                      CRIAR RIFA
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Transition appear show={modalPayment} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={() => setModalPayment(false)}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" />
            </Transition.Child>
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-2xl my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-md">
                <Dialog.Title
                  as="h3"
                  className="text-lg leading-6 font-medium text-gray-800 px-5 pt-5"
                >
                  Alterar Status do Pagamento
                </Dialog.Title>
                <div className="w-full">
                  <div className="w-full p-5">
                    <RadioGroup value={selected} onChange={setSelected}>
                      <RadioGroup.Label className="sr-only">
                        Server size
                      </RadioGroup.Label>
                      <div className="grid grid-cols-3 w-full gap-5">
                        <RadioGroup.Option
                          value={"waiting"}
                          className={({ active, checked }) =>
                            `
                  ${
                    checked
                      ? "bg-orange-500 text-white"
                      : "bg-white border border-orange-500"
                  }
                    relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none`
                          }
                        >
                          {({ active, checked }) => (
                            <>
                              <div className="flex items-center justify-between w-full">
                                <div className="flex items-center">
                                  <div className="text-sm">
                                    <RadioGroup.Label
                                      as="p"
                                      className={`font-medium text-base ${
                                        checked
                                          ? "text-white"
                                          : "text-orange-500"
                                      }`}
                                    >
                                      AGUARDANDO
                                    </RadioGroup.Label>
                                  </div>
                                </div>
                                {checked && (
                                  <div className="flex-shrink-0 text-white">
                                    <CheckIcon className="w-6 h-6" />
                                  </div>
                                )}
                              </div>
                            </>
                          )}
                        </RadioGroup.Option>

                        <RadioGroup.Option
                          value={"paid_out"}
                          className={({ active, checked }) =>
                            `
                  ${
                    checked
                      ? "bg-green-500 text-white"
                      : "bg-white border border-green-500"
                  }
                    relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none`
                          }
                        >
                          {({ active, checked }) => (
                            <>
                              <div className="flex items-center justify-between w-full">
                                <div className="flex items-center">
                                  <div className="text-sm">
                                    <RadioGroup.Label
                                      as="p"
                                      className={`font-medium text-base ${
                                        checked
                                          ? "text-white"
                                          : "text-green-500"
                                      }`}
                                    >
                                      CONFIRMADO
                                    </RadioGroup.Label>
                                  </div>
                                </div>
                                {checked && (
                                  <div className="flex-shrink-0 text-white">
                                    <CheckIcon className="w-6 h-6" />
                                  </div>
                                )}
                              </div>
                            </>
                          )}
                        </RadioGroup.Option>

                        <RadioGroup.Option
                          value={"reproved"}
                          className={({ active, checked }) =>
                            `
                  ${
                    checked
                      ? "bg-red-500 text-white"
                      : "bg-white border border-red-500"
                  }
                    relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none`
                          }
                        >
                          {({ active, checked }) => (
                            <>
                              <div className="flex items-center justify-between w-full">
                                <div className="flex items-center">
                                  <div className="text-sm">
                                    <RadioGroup.Label
                                      as="p"
                                      className={`font-medium text-base ${
                                        checked ? "text-white" : "text-red-500"
                                      }`}
                                    >
                                      RECUSADO
                                    </RadioGroup.Label>
                                  </div>
                                </div>
                                {checked && (
                                  <div className="flex-shrink-0 text-white">
                                    <CheckIcon className="w-6 h-6" />
                                  </div>
                                )}
                              </div>
                            </>
                          )}
                        </RadioGroup.Option>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="flex bg-gray-50 px-5 py-3 justify-end">
                    <Button
                      icon={<SaveIcon />}
                      loading={loading}
                      onClick={() => updateStatus()}
                    >
                      SALVAR
                    </Button>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>

      <DialogApp
        onClose={() => setDialog({})}
        open={dialog.open || false}
        title={dialog.title || ""}
        message={dialog.message || ""}
        type={dialog.type}
      />
    </Fragment>
  );
}
