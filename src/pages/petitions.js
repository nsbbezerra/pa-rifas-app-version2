import {
  CheckIcon,
  ExclamationIcon,
  ReceiptRefundIcon,
  SaveIcon,
} from "@heroicons/react/outline";
import { Fragment } from "react";
import Header from "../components/Header";
import Button from "../components/Button";

export default function Petitions() {
  return (
    <Fragment>
      <Header
        icon={<ReceiptRefundIcon />}
        title={"PEDIDOS DE CRIAÇÃO DE RIFA"}
      />
      <div className="pt-20 px-3 pb-3 overflow-auto max-h-full">
        <div className="shadow-md overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-white">
              <tr>
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
              <tr>
                <td className="px-6 py-2 whitespace-nowrap w-80 text-sm text-gray-700">
                  NATANAEL DOS SANTOS BEZERRA
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-700">
                  (63) 99971-1716
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-700">
                  5000
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-700">
                  R$ 100,00
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-700 w-20">
                  <Button
                    size="sm"
                    full={true}
                    icon={<ExclamationIcon />}
                    scheme="orange"
                  >
                    AGUARDANDO
                  </Button>
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-700 w-20">
                  <Button size="sm" full={true} icon={<SaveIcon />}>
                    CRIAR RIFA
                  </Button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-2 whitespace-nowrap w-80 text-sm text-gray-700">
                  NATANAEL DOS SANTOS BEZERRA
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-700">
                  (63) 99971-1716
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-700">
                  5000
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-700">
                  R$ 100,00
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-700 w-20">
                  <Button size="sm" full={true} icon={<CheckIcon />}>
                    PAGO
                  </Button>
                </td>
                <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-700 w-20">
                  <Button size="sm" full={true} icon={<SaveIcon />}>
                    CRIAR RIFA
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
}
