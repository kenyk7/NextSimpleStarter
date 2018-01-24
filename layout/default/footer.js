
const listLinks = [
	{
		title: "Orgnizar un evento",
		links: [
			{ name: "Crear un evento", url: "/" },
			{ name: "Checklist para organizar eventos", url: "/" },
			{ name: "Checklist para organizar fiestas", url: "/" },
			{ name: "Alternativa para vender entradas", url: "/" },
			{ name: "Registro de eventos", url: "/" }
		]
	},
	{
		title: "Promocionar un evento",
		links: [
			{ name: "Promociona tu evento", url: "/" },
			{ name: "Vende entradas online", url: "/" },
			{ name: "Cómo vender entradas para tu evento", url: "/" },
			{ name: "Promociona tus clases de cocina", url: "/" },
			{ name: "Promociona tus clases de Yoga", url: "/" },
			{ name: "Promociona tu conferencia", url: "/" },
			{ name: "Promociona eventos musicales", url: "/" },
			{ name: "Promociona eventos deportivos", url: "/" },
			{ name: "Promociona eventos gastronómicos", url: "/" },
			{ name: "Promociona shows humorísticos", url: "/" }
		]
	},
	{
		title: "Atención al cliente",
		links: [
			{ name: "Centro de ayuda", url: "/" },
			{ name: "Ayuda para el comprador", url: "/" },
			{ name: "Ayuda para el organizador", url: "/" },
			{ name: "Vender entradas en Joinnus", url: "/" },
			{ name: "Organizadores. ¿Cuándo recibe el dinero?", url: "/" },
			{ name: "Organizadores. ¿Cómo monetizar las ventas?", url: "/" },
			{ name: "Organizadores. Escanear entradas", url: "/" },
			{ name: "Compradores. ¿Cómo compro entradas?", url: "/" },
			{ name: "Compradores. Recibir entradas por correo electrónico", url: "/" },
			{ name: "Compradores. Cancelar una entrada", url: "/" }
		]
	},
	{
		title: "Joinnus en Latinoamérica",
		links: [
			{ name: "Argentina", url: "/" },
			{ name: "Brazil", url: "/" },
			{ name: "Chile", url: "/" },
			{ name: "Uruguay", url: "/" },
			{ name: "Paraguay", url: "/" },
			{ name: "Perú", url: "/" },
			{ name: "Bolivia", url: "/" },
			{ name: "Colombia", url: "/" },
			{ name: "Ecuador", url: "/" },
			{ name: "México", url: "/" }
		]
	}
];

const menus = [
	{
		name: "Terms",
		url: "/"
	},
	{
		name: "Privacy",
		url: "/"
	},
	{
		name: "Security",
		url: "/"
	},
	{
		name: "Status",
		url: "/"
	},
	{
		name: "Help",
		url: "/"
	}
];

export default () => (
	<footer className="footer-page">
    <div className="container">
			<div className="footer-logo text-center">
        <p>© 2018 Next simple starter.</p>
      </div>
      <hr/>
      <div className="row">
				<div className="col-12 text-center">
          <nav className="footer-nav">
          	{menus.map((item, index) => (
            	<a href="#" key={index}>{item.name}</a>
            ))}
					</nav>
					<br className="d-lg-none"/>
        </div>
      </div>
    </div>
  </footer>
);

