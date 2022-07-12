import { queryPk } from "../scripts/queryPk"
import { queries, postQueries } from "proskomma-tools"

export const catalog = postQueries.parseChapterVerseMapInDocSets({
    docSets: JSON.parse(await queryPk(queries.catalogQuery({cv: true})))
})