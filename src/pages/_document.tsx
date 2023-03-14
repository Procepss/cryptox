import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html>
			<Head>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/icons/favicons/apple-touch-icon.png"
				/>

				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/icons/favicons/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/icons/favicons/favicon-16x16.png"
				/>
				<link rel="manifest" href="/icons/favicons/site.webmanifest" />
				<link
					rel="mask-icon"
					href="/icons/favicons/safari-pinned-tab.svg"
					color="#5bbad5"
				/>
				<link rel="shortcut icon" href="/icons/favicons/favicon.ico" />

				<meta
					name="apple-mobile-web-app-status-bar-style"
					content="black-translucent"
				/>
				<meta name="theme-color" content="#ffffff" />

				<meta name="msapplication-TileColor" content="#da532c" />
				<meta
					name="msapplication-config"
					content="/icons/favicons/browserconfig.xml"
				/>

				<meta property="og:title" content="Cryptox"></meta>
				<meta
					property="og:description"
					content="Blockchain tools and information to buy, sell and invest"
				></meta>
				<meta
					property="og:image"
					content="https://cryptox.chulakov.com/images/og.jpg"
				></meta>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
