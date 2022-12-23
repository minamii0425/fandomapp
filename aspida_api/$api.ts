import type { AspidaClient, BasicHeaders } from 'aspida'
import { dataToURLString } from 'aspida'
import type { Methods as Methods0 } from './couplings'
import type { Methods as Methods1 } from './couplings/_id'
import type { Methods as Methods2 } from './fanbooks'
import type { Methods as Methods3 } from './fanbooks/_id'
import type { Methods as Methods4 } from './fanfics'
import type { Methods as Methods5 } from './fanfics/_id'
import type { Methods as Methods6 } from './genres'
import type { Methods as Methods7 } from './genres/_id'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:3010/api/' : baseURL).replace(/\/$/, '')
  const PATH0 = '/couplings'
  const PATH1 = '/fanbooks'
  const PATH2 = '/fanfics'
  const PATH3 = '/genres'
  const GET = 'GET'
  const POST = 'POST'
  const PUT = 'PUT'
  const DELETE = 'DELETE'

  return {
    couplings: {
      _id: (val1: number | string) => {
        const prefix1 = `${PATH0}/${val1}`

        return {
          /**
           * 指定したIDを持つカップリングの詳細を取得する。
           * @returns Successful
           */
          get: (option?: { headers?: Methods1['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 指定したIDを持つカップリングの詳細を取得する。
           * @returns Successful
           */
          $get: (option?: { headers?: Methods1['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * 指定したIDを持つカップリングを削除する。
           * @returns Successful
           */
          delete: (option: { query: Methods1['delete']['query'], headers?: Methods1['delete']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods1['delete']['resBody'], BasicHeaders, Methods1['delete']['status']>(prefix, prefix1, DELETE, option).json(),
          /**
           * 指定したIDを持つカップリングを削除する。
           * @returns Successful
           */
          $delete: (option: { query: Methods1['delete']['query'], headers?: Methods1['delete']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods1['delete']['resBody'], BasicHeaders, Methods1['delete']['status']>(prefix, prefix1, DELETE, option).json().then(r => r.body),
          /**
           * 指定したIDを持つカップリングを更新する。
           * @returns Successful
           */
          put: (option: { body: Methods1['put']['reqBody'], query: Methods1['put']['query'], headers?: Methods1['put']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods1['put']['resBody'], BasicHeaders, Methods1['put']['status']>(prefix, prefix1, PUT, option).json(),
          /**
           * 指定したIDを持つカップリングを更新する。
           * @returns Successful
           */
          $put: (option: { body: Methods1['put']['reqBody'], query: Methods1['put']['query'], headers?: Methods1['put']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods1['put']['resBody'], BasicHeaders, Methods1['put']['status']>(prefix, prefix1, PUT, option).json().then(r => r.body),
          $path: (option?: { method: 'delete'; query: Methods1['delete']['query'] } | { method: 'put'; query: Methods1['put']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        }
      },
      /**
       * 登録されているすべてのカップリングを取得する。
       * @returns Successful operation
       */
      get: (option?: { headers?: Methods0['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
      /**
       * 登録されているすべてのカップリングを取得する。
       * @returns Successful operation
       */
      $get: (option?: { headers?: Methods0['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
      /**
       * カップリングの登録を行う。
       * @returns Successful
       */
      post: (option: { body: Methods0['post']['reqBody'], headers?: Methods0['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
        fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).json(),
      /**
       * カップリングの登録を行う。
       * @returns Successful
       */
      $post: (option: { body: Methods0['post']['reqBody'], headers?: Methods0['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
        fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH0}`
    },
    fanbooks: {
      _id: (val1: number | string) => {
        const prefix1 = `${PATH1}/${val1}`

        return {
          /**
           * 指定したIDを持つオフ本の詳細を取得する。
           * @returns Successful
           */
          get: (option?: { headers?: Methods3['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 指定したIDを持つオフ本の詳細を取得する。
           * @returns Successful
           */
          $get: (option?: { headers?: Methods3['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods3['get']['resBody'], BasicHeaders, Methods3['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * 指定したIDを持つオフ本を削除する。
           * @returns Successful
           */
          delete: (option: { query: Methods3['delete']['query'], headers?: Methods3['delete']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods3['delete']['resBody'], BasicHeaders, Methods3['delete']['status']>(prefix, prefix1, DELETE, option).json(),
          /**
           * 指定したIDを持つオフ本を削除する。
           * @returns Successful
           */
          $delete: (option: { query: Methods3['delete']['query'], headers?: Methods3['delete']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods3['delete']['resBody'], BasicHeaders, Methods3['delete']['status']>(prefix, prefix1, DELETE, option).json().then(r => r.body),
          /**
           * 指定したIDを持つオフ本を更新する。
           * @returns Successful
           */
          put: (option: { body: Methods3['put']['reqBody'], query: Methods3['put']['query'], headers?: Methods3['put']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods3['put']['resBody'], BasicHeaders, Methods3['put']['status']>(prefix, prefix1, PUT, option).json(),
          /**
           * 指定したIDを持つオフ本を更新する。
           * @returns Successful
           */
          $put: (option: { body: Methods3['put']['reqBody'], query: Methods3['put']['query'], headers?: Methods3['put']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods3['put']['resBody'], BasicHeaders, Methods3['put']['status']>(prefix, prefix1, PUT, option).json().then(r => r.body),
          $path: (option?: { method: 'delete'; query: Methods3['delete']['query'] } | { method: 'put'; query: Methods3['put']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        }
      },
      /**
       * 登録されているすべてのオフ本を取得する。
       * @returns Successful operation
       */
      get: (option?: { headers?: Methods2['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, PATH1, GET, option).json(),
      /**
       * 登録されているすべてのオフ本を取得する。
       * @returns Successful operation
       */
      $get: (option?: { headers?: Methods2['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods2['get']['resBody'], BasicHeaders, Methods2['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
      /**
       * オフ本の登録を行う。
       * @returns Successful
       */
      post: (option: { body: Methods2['post']['reqBody'], headers?: Methods2['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
        fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, PATH1, POST, option).json(),
      /**
       * オフ本の登録を行う。
       * @returns Successful
       */
      $post: (option: { body: Methods2['post']['reqBody'], headers?: Methods2['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
        fetch<Methods2['post']['resBody'], BasicHeaders, Methods2['post']['status']>(prefix, PATH1, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH1}`
    },
    fanfics: {
      _id: (val1: number | string) => {
        const prefix1 = `${PATH2}/${val1}`

        return {
          /**
           * 指定したIDを持つオン作品の詳細を取得する。
           * @returns Successful
           */
          get: (option?: { headers?: Methods5['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 指定したIDを持つオン作品の詳細を取得する。
           * @returns Successful
           */
          $get: (option?: { headers?: Methods5['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods5['get']['resBody'], BasicHeaders, Methods5['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * 指定したIDを持つオン作品を削除する。
           * @returns Successful
           */
          delete: (option: { query: Methods5['delete']['query'], headers?: Methods5['delete']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods5['delete']['resBody'], BasicHeaders, Methods5['delete']['status']>(prefix, prefix1, DELETE, option).json(),
          /**
           * 指定したIDを持つオン作品を削除する。
           * @returns Successful
           */
          $delete: (option: { query: Methods5['delete']['query'], headers?: Methods5['delete']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods5['delete']['resBody'], BasicHeaders, Methods5['delete']['status']>(prefix, prefix1, DELETE, option).json().then(r => r.body),
          /**
           * 指定したIDを持つオン作品を更新する。
           * @returns Successful
           */
          put: (option: { body: Methods5['put']['reqBody'], query: Methods5['put']['query'], headers?: Methods5['put']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods5['put']['resBody'], BasicHeaders, Methods5['put']['status']>(prefix, prefix1, PUT, option).json(),
          /**
           * 指定したIDを持つオン作品を更新する。
           * @returns Successful
           */
          $put: (option: { body: Methods5['put']['reqBody'], query: Methods5['put']['query'], headers?: Methods5['put']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods5['put']['resBody'], BasicHeaders, Methods5['put']['status']>(prefix, prefix1, PUT, option).json().then(r => r.body),
          $path: (option?: { method: 'delete'; query: Methods5['delete']['query'] } | { method: 'put'; query: Methods5['put']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        }
      },
      /**
       * 登録されているすべてのオン作品を取得する。
       * @returns Successful operation
       */
      get: (option?: { headers?: Methods4['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, PATH2, GET, option).json(),
      /**
       * 登録されているすべてのオン作品を取得する。
       * @returns Successful operation
       */
      $get: (option?: { headers?: Methods4['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods4['get']['resBody'], BasicHeaders, Methods4['get']['status']>(prefix, PATH2, GET, option).json().then(r => r.body),
      /**
       * オン作品の登録を行う。
       * @returns Successful
       */
      post: (option: { body: Methods4['post']['reqBody'], headers?: Methods4['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
        fetch<Methods4['post']['resBody'], BasicHeaders, Methods4['post']['status']>(prefix, PATH2, POST, option).json(),
      /**
       * オン作品の登録を行う。
       * @returns Successful
       */
      $post: (option: { body: Methods4['post']['reqBody'], headers?: Methods4['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
        fetch<Methods4['post']['resBody'], BasicHeaders, Methods4['post']['status']>(prefix, PATH2, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH2}`
    },
    genres: {
      _id: (val1: number | string) => {
        const prefix1 = `${PATH3}/${val1}`

        return {
          /**
           * 指定したIDを持つジャンルの詳細を取得する。
           * @returns Successful
           */
          get: (option?: { headers?: Methods7['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods7['get']['resBody'], BasicHeaders, Methods7['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * 指定したIDを持つジャンルの詳細を取得する。
           * @returns Successful
           */
          $get: (option?: { headers?: Methods7['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods7['get']['resBody'], BasicHeaders, Methods7['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * 指定したIDを持つジャンルを削除する。
           * @returns Successful
           */
          delete: (option: { query: Methods7['delete']['query'], headers?: Methods7['delete']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods7['delete']['resBody'], BasicHeaders, Methods7['delete']['status']>(prefix, prefix1, DELETE, option).json(),
          /**
           * 指定したIDを持つジャンルを削除する。
           * @returns Successful
           */
          $delete: (option: { query: Methods7['delete']['query'], headers?: Methods7['delete']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods7['delete']['resBody'], BasicHeaders, Methods7['delete']['status']>(prefix, prefix1, DELETE, option).json().then(r => r.body),
          /**
           * 指定したIDを持つジャンルを更新する。
           * @returns Successful
           */
          put: (option: { body: Methods7['put']['reqBody'], query: Methods7['put']['query'], headers?: Methods7['put']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods7['put']['resBody'], BasicHeaders, Methods7['put']['status']>(prefix, prefix1, PUT, option).json(),
          /**
           * 指定したIDを持つジャンルを更新する。
           * @returns Successful
           */
          $put: (option: { body: Methods7['put']['reqBody'], query: Methods7['put']['query'], headers?: Methods7['put']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods7['put']['resBody'], BasicHeaders, Methods7['put']['status']>(prefix, prefix1, PUT, option).json().then(r => r.body),
          $path: (option?: { method: 'delete'; query: Methods7['delete']['query'] } | { method: 'put'; query: Methods7['put']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        }
      },
      /**
       * 登録されているすべてのジャンルを取得する。
       * @returns Successful operation
       */
      get: (option?: { headers?: Methods6['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, PATH3, GET, option).json(),
      /**
       * 登録されているすべてのジャンルを取得する。
       * @returns Successful operation
       */
      $get: (option?: { headers?: Methods6['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods6['get']['resBody'], BasicHeaders, Methods6['get']['status']>(prefix, PATH3, GET, option).json().then(r => r.body),
      /**
       * ジャンルの登録を行う。
       * @returns Successful
       */
      post: (option: { body: Methods6['post']['reqBody'], headers?: Methods6['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
        fetch<Methods6['post']['resBody'], BasicHeaders, Methods6['post']['status']>(prefix, PATH3, POST, option).json(),
      /**
       * ジャンルの登録を行う。
       * @returns Successful
       */
      $post: (option: { body: Methods6['post']['reqBody'], headers?: Methods6['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
        fetch<Methods6['post']['resBody'], BasicHeaders, Methods6['post']['status']>(prefix, PATH3, POST, option).json().then(r => r.body),
      /**
       * 複数ジャンルの削除を行う。
       * @returns Successful
       */
      delete: (option: { body: Methods6['delete']['reqBody'], headers?: Methods6['delete']['reqHeaders'] | undefined, config?: T | undefined }) =>
        fetch<Methods6['delete']['resBody'], BasicHeaders, Methods6['delete']['status']>(prefix, PATH3, DELETE, option).json(),
      /**
       * 複数ジャンルの削除を行う。
       * @returns Successful
       */
      $delete: (option: { body: Methods6['delete']['reqBody'], headers?: Methods6['delete']['reqHeaders'] | undefined, config?: T | undefined }) =>
        fetch<Methods6['delete']['resBody'], BasicHeaders, Methods6['delete']['status']>(prefix, PATH3, DELETE, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH3}`
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
