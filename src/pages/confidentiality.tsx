import Head from 'next/head'
import type { NextPageWithLayout } from './_app'
import { ReactElement } from 'react'
import Layout from "../components/Layout"

const Confidentiality: NextPageWithLayout = () => {
    return (
        <>
            <Head>
                <title>Политика конфиденциальности - Навиное искусство</title>
                <meta name="description" content="Политика конфиденциальности" />
            </Head>
            <div className="h-[35vw]">
                <div className="w-screen flex flex-col justify-center items-center text-naive-black">
                    <div className="mt-5 text-header2 font-semibold">Политика конфиденциальности</div>
                    <div className="w-1/2 text-left mt-5">
                    Вопрос о том, каковы связи, объединяющие людей, конкретизировался как определение 
                    природы и функций общественной солидарности в современном развитом обществе 
                    в отличие от примитивных, или традиционных, обществ, как объяснение перехода 
                    от одной общественной формы к другой. В духе типичной для 19 в. идеи 
                    конструирования двух идеальных типов общества, между которыми существует историческая 
                    преемственность, Дюркгейм строил дихотомию обществ с механической (в архаическом 
                    обществе) и органической (в развитом обществе) солидарностью как двух звеньев 
                    единой эволюционной цепи. Механическая солидарность основана на неразвитости и сходстве индивидов и 
                    их общественных функций, органическая – на разделении труда. Общественное разделение труда, предполагая 
                    обмен продуктами своей деятельности между индивидами, создает общественную 
                    солидарность, интегрирует общество, обеспечивает единство социального организма. 
                    Рассматривая солидарность как высший моральный принцип, Дюркгейм считал моральным и само 
                    разделение труда. Антагонизм труда и капитала, моральный и экономический кризисы он считал 
                    отклонением от нормы, результатом недостаточной отрегулированности отношений между классами, 
                    следствием отставания культуры от экономики. С целью ликвидировать это отставание Дюркгейм 
                    предлагал создавать профессиональные корпорации, которые будут вырабатывать и внедрять в 
                    жизнь новые нормы, регулирующие отношения между трудом и капиталом, способствующие развитию 
                    личности и преодолению кризиса. Все это, по его мнению, будет служить преодолению аномии
                     – состояния морального вакуума, безнормности, когда старые нормы уже не выполняют свои 
                     функции, а новые еще не сложились. Дюркгейм модернизировал традиционное понимание религии, 
                     усматривая в обществе источник представлений о священном и объявляя общество Богом. 
                     Поскольку главной функцией религии является создание общественной солидарности, 
                     в нее должны включаться все представления и действия, выполняющие эту функцию.
                    </div>
                </div>
            </div>
        </>
    )
}

Confidentiality.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default Confidentiality
