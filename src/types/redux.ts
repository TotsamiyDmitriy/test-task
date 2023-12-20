import React from "react";
import { ValuesForm } from "../components/PostTeammate";


export enum StatusTypes {
	PENDING = 'pending',
	FULFILLED = 'fulfilled',
	REJECTED = 'rejected',
  }


export interface ControllerForm {
	data : ValuesForm
	setSuccess : React.Dispatch<boolean>
	setError : React.Dispatch<string | undefined>
}


export type PositionType = {
	id : string,
	name : string
}