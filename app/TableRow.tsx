export default function TableRow({ item }: { item: Card }) {
    return (
        <div className="relative flex flex-col rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
            <h3 className="font-black text-gray-800 text-md overflow-hidden truncate">
                {item.name}
            </h3>
            <div className="flex justify-between item-center mb-2">
                <p className="text-gray-500 font-medium overflow-hidden truncate">
                    {item.set}
                </p>
                <div className="flex items-center">#{item.number}</div>
            </div>

            <div className="w-full bg-white grid place-items-center">
                <img
                    src={`https://product-images.tcgplayer.com/fit-in/400x558/${item.tcgplayer_id}.jpg`}
                    width={200}
                />
            </div>
            <div className="w-full bg-white flex flex-col pt-2">
                <table className="table-auto">
                    <tbody>
                        <tr>
                            <td className="font-bold">Low</td>
                            <td className="text-end">
                                {item.tcg_low_price > 0
                                    ? `$${item.tcg_low_price.toFixed(2)}`
                                    : '-'}
                            </td>
                            <td className="text-amber-400 text-end">
                                {parseFloat(item.tcg_foil_low_price) > 0
                                    ? `$${parseFloat(item.tcg_foil_low_price).toFixed(2)}`
                                    : '-'}
                            </td>
                        </tr>
                        <tr>
                            <td className="font-bold">Mid</td>
                            <td className="text-end">
                                {item.tcg_mid_price > 0
                                    ? `$${item.tcg_mid_price.toFixed(2)}`
                                    : '-'}
                            </td>
                            <td className="text-amber-400 text-end">
                                {parseFloat(item.tcg_foil_mid_price) > 0
                                    ? `$${parseFloat(item.tcg_foil_mid_price).toFixed(2)}`
                                    : '-'}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
