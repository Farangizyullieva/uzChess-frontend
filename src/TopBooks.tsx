import TopBookItem from "./TopBookItem"

export default function () {
    return <div className="flex flex-col" style={{ backgroundColor: '#1A1D1F', borderRadius: '8px', width: '326px', gap: "18px" }}>
        <div className="flex flex-row justify-between" style={{ padding: '16px 16px 0 16px' }}>
            <h1 style={{ fontSize: '18px', color: '#FCFCFC', fontWeight: '500px' }}>Top kitoblar</h1>
            <button className="flex flex-row items-center" style={{ color: "#9DA1A3", backgroundColor: 'transparent', border: 'none' }}>
                Barchasi
                <img src="/arrow-right.svg" alt="icon" />
            </button>
        </div>
        <div className="flex flex-col" style={{ gap: '12px', overflow: 'hidden', padding: '0 0 16px 16px' }}>
            <TopBookItem author="A.Nimzowitsch" title="Mening tizimim" image="/book.png" />
            <div style={{ width: '310px', height: "1px", backgroundColor: "#1F272A" }}></div>
            <TopBookItem author="D.Bronstein" title="Zurixdagi shaxmat musobaqasi" image="/book2.png" />
            <div style={{ width: '310px', height: "1px", backgroundColor: "#1F272A" }}></div>
            <TopBookItem author="B.Fischer" title="Mening esdaqolarlik o‘yinlarim" image="/book3.png" />
        </div>
    </div>
}