import { queryPk } from "../scripts/queryPk"
import { queries, postQueries } from "proskomma-tools"

const q = await queryPk(queries.catalogQuery({cv: true}))
const catalog = postQueries.parseChapterVerseMapInDocSets({
    docSets: JSON.parse(q).data.docSets
})
//console.log(catalog)
export { catalog };