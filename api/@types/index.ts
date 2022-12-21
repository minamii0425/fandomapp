/* eslint-disable */
/** APIキー */
export type XApiKey = string

/** One time Token */
export type Token = string

/** ジャンルID */
export type GenreID = number

/** ジャンルID(複数) */
export type GenreIDs = GenreID[]

/** ジャンル名 */
export type GenreName = string

/** ジャンル傾向 */
export type GenreStyle = 'select genre style' | '漫画' | '小説' | 'アニメ' | '半生' | '生'

/** ジャンルにハマった年月日 */
export type GenreStartDate = string

/** ジャンルから上がった年月日 */
export type GenreEndDate = string

/** ジャンルにハマった時の年齢 */
export type GenreStartAge = number

/** ジャンルから上がった時の年齢 */
export type GenreEndAge = number

/** Twitterのフォロー数 */
export type GenreFollowee = number

/** Twitterのフォロワー数 */
export type GenreFollower = number

/** TwitterのFF比 */
export type GenreFFRatio = number

/** ジャンル全般コメント */
export type GenreComment = string

export type CouplingID = number

export type CouplingName = string

/** 二次創作をしたか */
export type CouplingFanAct = 'オフ本を発行' | 'オン専' | 'ROM'

/** カップリングの傾向 */
export type CouplingStyle = string

/** カップリングの説明 */
export type CouplingSummary = string

/** 攻めの名前 */
export type CouplingTopName = string

/** 攻めの年齢 */
export type CouplingTopAge = number

/** 攻めの説明 */
export type CouplingTopSummary = string

/** 攻めの職業 */
export type CouplingTopJob = string

/** 攻めの身長 */
export type CouplingTopHeight = number

/** 受けの名前 */
export type CouplingBottomName = string

/** 受けの年齢 */
export type CouplingBottomAge = number

/** 受けの説明 */
export type CouplingBottomSummary = string

/** 受けの職業 */
export type CouplingBottomJob = string

/** 受けの身長 */
export type CouplingBottomHeight = number

/** オン作品のID */
export type FanficID = number

/** オン作品のタイトル */
export type FanficTitle = string

/** オン作品の字数 */
export type FanficNumberOfCharacters = number

/** オン作品の公開日 */
export type FanficPublishedDate = string

/** オン作品の作品傾向 */
export type FanficStyle = string

/** オン作品のブクマ数 */
export type FanficBookmarks = number

/** オン作品のあらすじ */
export type FanficSummary = string

/** オン作品の年齢制限の有無 */
export type FanficRating = boolean

/** オン作品の表紙のURL */
export type FanficCover = string

/** オン作品のコメント */
export type FanficComment = string

/** オフ本のID */
export type FanbookID = number

/** オフ本のタイトル */
export type FanbookTitle = string

/** オフ本のページ数 */
export type FanbookPages = number

/** オフ本の発行日 */
export type FanbookPublishedDate = string

/** オフ本の作品傾向 */
export type FanbookStyle = string

/** オフ本のサンプルブクマ数 */
export type FanbookSampleBookmarks = number

/** オフ本が書き下ろしかどうか */
export type FanbookNewlyWritten = boolean

/** オフ本の頒布数(通販) */
export type FanbookNumberOfDistributionOnline = number

/** オフ本の頒布数(リアイベ) */
export type FanbookNumberOfDistributionOffline = number

/** オフ本の印刷部数 */
export type FanbookNumberOfPublished = number

/** オフ本の頒布価格 */
export type FanbookPrice = number

/** オフ本のあらすじ */
export type FanbookSummary = string

/** オフ本の年齢制限の有無 */
export type FanbookRating = boolean

/** オフ本の表紙のURL */
export type FanbookCover = string

/** オフ本のコメント */
export type FanbookComment = string

/** Post成功時のレスポンス。常にtrue */
export type PostResponseBody = {
  isSucceed?: boolean | undefined
}

export type ApiErrResponse = {
  statusCode?: number | undefined
  errCode?: string | undefined
  errMessage?: string | undefined
}

/** ジャンル情報 */
export type Genre = {
  genreID?: GenreID | undefined
  genreName?: GenreName | undefined
  genreStyle?: GenreStyle | undefined
  genreStartDate?: GenreStartDate | undefined
  genreEndDate?: GenreEndDate | undefined
  genreStartAge?: GenreStartAge | undefined
  genreEndAge?: GenreEndAge | undefined
  genreFollowee?: GenreFollowee | undefined
  genreFollower?: GenreFollower | undefined
  genreFFRatio?: GenreFFRatio | undefined
  genreComment?: GenreComment | undefined
}

/** ジャンル情報(複数) */
export type Genres = Genre[]

/** カップリング情報 */
export type Coupling = {
  genreName?: GenreName | undefined
  couplingName?: CouplingName | undefined
  couplingFanAct?: CouplingFanAct | undefined
  couplingStyle?: CouplingStyle | undefined
  couplingSummary?: CouplingSummary | undefined
  couplingTopName?: CouplingTopName | undefined
  couplingBottomName?: CouplingBottomName | undefined
  couplingTopAge?: CouplingTopAge | undefined
  couplingBottomAge?: CouplingBottomAge | undefined
  couplingTopSummary?: CouplingTopSummary | undefined
  couplingBottomSummary?: CouplingBottomSummary | undefined
  couplingTopHeight?: CouplingTopHeight | undefined
  couplingBottomHeight?: CouplingBottomHeight | undefined
  couplingTopJob?: CouplingTopJob | undefined
  couplingBottomJob?: CouplingBottomJob | undefined
}

/** カップリング情報(複数) */
export type Couplings = Coupling[]

/** オン作品情報 */
export type Fanfic = {
  genreName?: GenreName | undefined
  couplingName?: CouplingName | undefined
  fanficTitle?: FanficTitle | undefined
  fanficNumberOfCharacters?: FanficNumberOfCharacters | undefined
  fanficPublishedDate?: FanficPublishedDate | undefined
  fanficStyle?: FanficStyle | undefined
  fanficBookmarks?: FanficBookmarks | undefined
  fanficSummary?: FanficSummary | undefined
  fanficRating?: FanficRating | undefined
  fanficCover?: FanficCover | undefined
  fanficComment?: FanficComment | undefined
}

/** オン作品情報(複数) */
export type Fanfics = Fanfic[]

/** オフ本情報 */
export type Fanbook = {
  genreName?: GenreName | undefined
  couplingName?: CouplingName | undefined
  fanbookTitle?: FanbookTitle | undefined
  fanbookPages?: FanbookPages | undefined
  fanbookPublishedDate?: FanbookPublishedDate | undefined
  fanbookStyle?: FanbookStyle | undefined
  fanbookSampleBookmarks?: FanbookSampleBookmarks | undefined
  fanbookNewlyWritten?: FanbookNewlyWritten | undefined
  fanbookNumberOfDistributionOffline?: FanbookNumberOfDistributionOffline | undefined
  fanbookNumberOfDistributionOnline?: FanbookNumberOfDistributionOnline | undefined
  fanbookNumberOfPublished?: FanbookNumberOfPublished | undefined
  fanbookPrice?: FanbookPrice | undefined
  fanbookSummary?: FanbookSummary | undefined
  fanbookRating?: FanbookRating | undefined
  fanbookCover?: FanbookCover | undefined
  fanbookComment?: FanbookComment | undefined
}

/** オフ本情報(複数) */
export type Fanbooks = Fanbook[]
