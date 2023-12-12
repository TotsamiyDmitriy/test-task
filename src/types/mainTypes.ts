export interface State {
	data? : DataType
  }
 
export type DataType = {

		count: number,
		links: {next_url : string | null, prev_url:string | null}
		page:number,
		success: boolean,
		total_pages:number,
		total_users:number,
		
		users :Users[],	
}

export type Users = {
	id : number,
	name : string,
	email : string,
	phone : string,
	position : string,
	position_id : string,
	registration_timestamp: number,
	photo:string,

}


export type Action<T> = {
	type: "SET_USERS",
	payload : T
}

