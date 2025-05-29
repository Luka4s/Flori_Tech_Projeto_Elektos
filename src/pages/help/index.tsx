export function HelpPage() {
  return (
    <div className="flex flex-col bg-gray-100 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Ajuda</h1>

      <p className="text-gray-700 text-lg mb-4">
        Esta aplicação foi desenvolvida para que você possa acompanhar de forma
        visual e intuitiva as principais métricas relacionadas aos seus
        usuários. Abaixo estão os recursos disponíveis:
      </p>

      <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
        <li>
          <strong>Interações Mensais:</strong> Quantidade de vezes que os
          usuários utilizaram a aplicação em cada mês.
        </li>
        <li>
          <strong>Percentual por Faixa Etária:</strong> Distribuição percentual
          dos usuários por faixa etária.
        </li>
        <li>
          <strong>Peso Descartado Mensalmente:</strong> Quantidade de peso (em
          kg) descartado pelos usuários a cada mês.
        </li>
      </ul>

      <div className="bg-white p-6 rounded-xl shadow-md mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Como utilizar
        </h2>
        <p className="text-gray-600 mb-2">
          Navegue até a aba <strong>Dashboard</strong> para visualizar os
          gráficos com os dados mensais.
        </p>

        <p className="text-gray-600">
          Todos os dados são atualizados automaticamente conforme novas
          informações são inseridas.
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Dúvidas Frequentes
        </h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Os dados exibidos são atualizados em tempo real?</li>
          <li>É possível exportar os dados em PDF ou Excel?</li>
          <li>Como os dados de peso descartado são calculados?</li>
        </ul>
        <p className="text-gray-600 mt-4">
          Caso tenha outras dúvidas, entre em contato com o suporte técnico ou
          acesse nossa documentação completa.
        </p>
      </div>
    </div>
  );
}
