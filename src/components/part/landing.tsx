import styles from '../../styles/landing-style.module.css'

type CardProps = {
	title: string
	children: string
	logo: string
}

type PageProps = {
	children?: React.ReactNode
	title:string
}
function LandingHeader() {
	return (
		<div>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
					position: "fixed",
					width: "100%",
					background: "#181127",
					height: "160px",
					left: 0,
					top: 0,
					zIndex: "7",
					alignItems: "center",
				}}
			>
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						paddingLeft: "10%",
					}}
				>
					<img
						src="/landing-logo.png"
						alt="logo"
						style={{
							width: "74px",
						}}
					></img>
					<div
						style={{
							fontSize: "42px",
							fontWeight: "880",
						}}
					>
						Flare Dapp
					</div>
				</div>
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						paddingRight: "10%",
					}}
				>
					<div
						style={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							paddingRight: "5%",
						}}
					>
						<i className="iconfont icon-globe">&#xef3e;</i>
						<div>En</div>
					</div>
					<div>
						<button
							style={{
								borderRadius: "50px",
								background: "linear-gradient(159deg, #F9D423 0%, #F83600 100%)",
								height: "48px",
								padding: "11px 28px",
								fontSize: "18px",
								fontWeight: "700",
								whiteSpace: "nowrap",
							}}
						>
							Launch Dapp
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

function LandingCard(props: CardProps) {
	return (
		<div
			style={{
				width: "383px",
				height: "472px",
				borderRadius: "15px",
				background: "rgba(255, 255, 255, 0.20)",
				boxShadow:
					"0px 6.440805912017822px 8.587740898132324px 0px rgba(0, 0, 0, 0.16)",
				backdropFilter: "blur(200px)",
				padding:"33px",
				margin:"54px"
			}}
		>
			<img
				alt="logo"
				style={{
					width: "115px",
					height: "115px",
				}}
				src={props.logo}
			></img>
			<div
				style={{
					fontSize: "24px",
					fontWeight: "700",
					lineHeight: "48px",
					marginTop: "19px",
				}}
			>
				{props.title}
			</div>
			<div
				style={{
					width:"312px",
					fontSize: "16px",
					fontWeight: "550",
					lineHeight: "28px",
					marginTop: "6px",
				}}
			>
				{props.children}
			</div>
		</div>
	)
}

function LandingPage(props:PageProps){
	return (
		<div
			style={{
				height: "1206px",
				marginTop: "296px",
			}}
		>
			<div
				style={{
					textAlign: "center",
					textShadow: "0px 4px 20px 0px rgba(255, 255, 255, 0.25)",
					fontSize: "48px",
					fontWeight: "700",
				}}
			>
				{props.title}
			</div>
			<div>
				{props.children}
			</div>
		</div>
	)

}
function LandingContent() {
	return (
		<div
			style={{
				width: "100%",
				height: "100%",
			}}
		>
			<div
				style={{
					position: "absolute",
					width: "455.583px",
					height: "1167.317px",
					borderRadius: "1167.317px",
					opacity: "0.6",
					backgroundColor: "#FF6B00",
					filter: "blur(250px)",
					left: "40%",
					top: "400px",
				}}
			></div>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					top: "0",
				}}
			>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<div
						style={{
							paddingTop: "400px",
							textAlign: "center",
							fontSize: "64px",
							fontWeight: "750",
						}}
					>
						Engage, Enlighten, Empower
					</div>
					<div
						style={{
							paddingTop: "47px",
							textAlign: "center",
							fontSize: "24px",
							fontWeight: "550",
							width: "910px",
							lineHeight: "42px",
						}}
					>
						Flare is an aggregated information platform that incorporates
						decentralized technologies and philosophy.
					</div>
					<button
						style={{
							marginTop: "42px",
							borderRadius: "50px",
							background: "linear-gradient(159deg, #F9D423 0%, #F83600 100%)",
							height: "60px",
							padding: "11px 32px",
							fontSize: "24px",
							fontWeight: "700",
							whiteSpace: "nowrap",
						}}
					>
						Get Started
					</button>
				</div>
				<div
					style={{
						backgroundColor: "gray",
						height: "800px",
						width: "1250px",
						borderRadius: "15px",
						marginTop: "150px",
					}}
				>
					This is the image
				</div>
				<div
					style={{
						marginTop: "193px",
						width: "1173px",
						textAlign: "center",
						fontSize: "36px",
						fontWeight: "550",
						lineHeight: "48px",
					}}
				>
					Our goal is to build a trustworthy, liberated and high-value social
					network. Using mechanisms such as pledges, predictions, and token
					incentives, we will provide users with the ability to have a voice and
					a channel to prevent meaningless information.
				</div>
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						paddingTop: "210px",
						justifyContent: "space-around",
					}}
				>
					<LandingCard title="Decentralized Universe" logo="/vite.svg">
						As a service provider, we ensures a secure, anonymous and euphoric
						experience through zk-SNARK Algorithm Encryption, Node-based
						Storage, RSS3, ML Algorithm, and AI Language Models. With us, you
						can post shocking news that you know, share your opinions, and vote
						for rights and freedom.
					</LandingCard>
					<LandingCard title="Thriving Web3 Economy" logo="/vite.svg">
						We increase the playability of the spreading information by means of
						stake verification, stake prediction, and NFT token-creation, etc.,
						all while promoting the recreation enthusiasm of KOLs. We also
						expand your rights and authorities when you have more tokens
						collected or rank at the top of your interest groups.
					</LandingCard>
					<LandingCard title="DAO Consensus" logo="/vite.svg">
						We establish consensus in Flare Dapp, where we created mechanisms to
						promote a transparent environment for content creation,
						distribution, participation, verification, and feedback. By
						providing reasonable incentives and restrictive rules that support
						the dual-token model, we help you build your credibility and
						reputation.
					</LandingCard>
				</div>
				<LandingPage title="Gossip Timeline: Systematic Information">
					<div style={{ display: "none" }}>text</div>
				</LandingPage>
				<LandingPage title="质押预测Feature：独特质押玩法"></LandingPage>
				<LandingPage title="Wallet页面：链上链下并行的激励系统介绍"></LandingPage>
				<LandingPage title="Enjoy Flare AI Assistant">
					<div
						style={{
							width: "953px",
							height: "953px",
							background: "var(--cylinder-4-color-1, #5D45ED)",
							transform: "rotate(-106.056deg)",
							opacity: "0.05000000074505806",
							filter: "blur(5px)",
							position: "absolute",
							right: "0",
						}}
					></div>
					<div
						style={{
							width: "1169px",
							height: "519px",
							backgroundColor: "gray",
							marginTop: "225px",
						}}
					></div>
					<div
						style={{
							marginTop: "68px",
							width: "815px",
							fontSize: "16px",
							lineHeight: "28px",
						}}
					>
						With Flare AI, we help you filter news and articles based on
						specific topics of interest, and automatically clustering similar
						articles or extracting keywords for you, with according public
						opinions. By analyzing large volumes of text data from various
						sources such as news articles, social media posts, blogs, and forums
						and applying natural language processing techniques, Flare AI can
						extract key topics, sentiment, and relevant information from the
						text. Moreover, we detect the emotions associated with specific
						topics, in which we can identify positive, negative, or neutral
						sentiment.
					</div>
				</LandingPage>
				<LandingPage title="Eye Care Mode">
					<div
						style={{
							display: "flex",
							flexDirection: "row",
							marginTop: "94px",
						}}
					>
						<div style={{ margin: "45px" }}>
							<div
								style={{
									width: "618px",
									height: "348px",
									borderRadius: "15px",
									border: "3px solid rgba(255, 255, 255, 0.50)",
									boxShadow:
										"0px 4px 40px 0px rgba(255, 255, 255, 0.08), 0px -4px 40px 0px rgba(255, 255, 255, 0.08)",
								}}
							></div>
							<div
								style={{
									marginTop: "40px",
									textShadow: "0px 4px 20px 0px ",
									fontSize: "32px",
									fontWeight: "700",
									lineHeight: "68px",
								}}
							>
								Light Mode
							</div>
						</div>
						<div style={{ margin: "45px" }}>
							<div
								style={{
									width: "618px",
									height: "348px",
									borderRadius: "15px",
									border: "3px solid rgba(255, 255, 255, 0.50)",
									boxShadow:
										"0px 4px 40px 0px rgba(255, 255, 255, 0.08), 0px -4px 40px 0px rgba(255, 255, 255, 0.08)",
								}}
							></div>
							<div
								style={{
									marginTop: "40px",
									textShadow: "0px 4px 20px 0px ",
									fontSize: "32px",
									fontWeight: "700",
									lineHeight: "68px",
								}}
							>
								Dark Mode
							</div>
						</div>
					</div>
				</LandingPage>
				<LandingPage title="Multi-Language"></LandingPage>
				<div
					style={{
						width: "100%",
						height: "715px",
						padding: "163px",
						alignContent: "left",
					}}
				>
					<div className={styles.backTitle}>TECHNOLOGY</div>
					<div className={styles.backText}>A Trusted Way For Information</div>
					<div
						style={{
							display: "flex",
							flexDirection: "row",
							alignContent: "center",
							justifyContent: "space-between",
							marginTop: "82px",
						}}
					>
						<div className={styles.backCard}>
							<div className={styles.backCardTitle}>PROOF OF STAKE</div>
							<div className={styles.backCardText}>99%</div>
						</div>
						<div>
							<div className={styles.backCardTitle}>LOW FEES</div>
							<div className={styles.backCardText}>$0.02</div>
						</div>
						<div>
							<div className={styles.backCardTitle}>FAST ENTRANSACTIONS</div>
							<div className={styles.backCardText}>8 Sec</div>
						</div>
					</div>
				</div>
				<div
					style={{
						width: "100%",
						height: "715px",
						alignContent: "left",
						padding: "163px",
					}}
				>
					<div className={styles.backTitle}>FOUNDER TEAM</div>
				</div>
			</div>
		</div>
	)
}
function LandingFoot() {
	return (
		<div className={styles.footContainer}>
			<div
				style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
			>
				<img src="/landing-logo.png" alt="logo"></img>
				<div>Flare Dapp</div>
			</div>
			<div className={styles.footText}>© Flare Dapp 2023 | All Rights Reserved</div>
		</div>
	)
}
export { LandingContent, LandingFoot, LandingHeader }
