'use client'
import React from "react";
import { CheckTwoSvg, UnCheckSvg } from "../svg";
import Link from "next/link";

const pricingPlans = [
	{
		id: 1,
		title: "Gümüş Paket",
		validity: "Başlangıç Seviyesi",
		price: 499,
		frequency: "/ Ay",
		benefits: [
			"Günlük Teknik Analizler",
			"Haftalık Bülten Erişimi",
			"Temel Eğitim Modülleri"
		],
		inactiveBenefits: [
			"VIP Sinyal Grubu",
			"Canlı Soru-Cevap Yayını"
		],
	},
	{
		id: 2,
		title: "Altın Paket",
		validity: "En Çok Tercih Edilen",
		price: 999,
		frequency: "/ Ay",
		benefits: [
			"Günlük Teknik Analizler",
			"Haftalık Bülten Erişimi",
			"Orta Seviye Eğitimler",
			"VIP Sinyal Grubu (Telegram)"
		],
		inactiveBenefits: [
			"Birebir Portföy Analizi"
		],
	},
	{
		id: 3,
		title: "Platin Paket",
		validity: "Profesyonel Yatırımcı",
		price: 1499,
		frequency: "/ Ay",
		benefits: [
			"Tüm Analiz ve Raporlar",
			"İleri Seviye Stratejiler",
			"VIP Sinyal Grubu (Telegram)",
			"Birebir Portföy Danışmanlığı",
			"Haftalık Özel Canlı Yayınlar"
		],
		inactiveBenefits: [],
	}
];

export default function PricingOne() {
	return (
		<section className="pricing-area pt-115 pb-80">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-6">
						<div className="tp-section-5 text-center mb-65">
							<h5 className="tp-section-5-subtitle mb-10">Abonelik Planları</h5>
							<h3 className="tp-section-5-title">Size Uygun Paketi Seçin</h3>
							<p>Karmaşıklıktan uzak, şeffaf fiyatlandırma ile profesyonel analizlere hemen ulaşın.</p>
						</div>
					</div>
				</div>
				<div className="row">
					{pricingPlans.map(plan => (
						<div className="col-lg-4 col-md-6" key={plan.id}>
							<div
								className={`tp-pricing-5-item ${plan.title === "Altın Paket" ? "active" : ""} mb-40 wow fadeInUp`}
								data-wow-delay={`.${plan.id}s`}
							>
								<div className="tp-pricing-5-head">
									<div className="tp-pricing-5-head-text">
										<h4 className="tp-pricing-5-head-title">{plan.title}</h4>
										<span>{plan.validity}</span>
									</div>
									<h2 className="tp-pricing-5-price">
										<span>₺</span>{" "}{plan.price}<b>{plan.frequency}</b>
									</h2>
								</div>
								<div className="tp-pricing-5-list">
									<ul>
										{plan.benefits.map((benefit, index) => (
											<li key={index}>
												<span>
													<CheckTwoSvg />
												</span>
												{benefit}
											</li>
										))}
										{plan.inactiveBenefits.map((benefit, index) => (
											<li className="inactive" key={index}>
												<span>
													<UnCheckSvg />
												</span>
												{benefit}
											</li>
										))}
									</ul>
								</div>
								<div className="tp-pricing-5-btn">
									<Link className="tp-btn-4" href="/checkout">
										Hemen Başla
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}