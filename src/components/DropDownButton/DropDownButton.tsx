import React, { CSSProperties, ReactElement, useState } from 'react'
import { IconContext, IconType } from 'react-icons'
import { VscChevronDown } from 'react-icons/vsc'
import "./dropDown.scss"
import { listPROPS } from './DropDownMenu/DropDownItems'
import { DropDownMenu } from './DropDownMenu/DropDownMenu'
export { DropDownItems } from './DropDownMenu/DropDownItems'

interface DropDown_PROPS
{
	icon?:IconType
	text?:string
	disabled?:boolean
	style?:CSSProperties
	items?:listPROPS[]
	children?:ReactElement<listPROPS>
	[key:string]:unknown
}
export const DropDown:React.FC<DropDown_PROPS> = (props)=>{

	const [isActive,setActive] = useState<Boolean>(false)
	function itemClick(ev:React.MouseEvent)
	{
		ev.stopPropagation()
		setActive(_isActive=>!_isActive)
	}
	return(
	<button style={props.style} 
	onClick={props.items?()=>setActive(_isActive => !_isActive):()=>{}}
	disabled={props.disabled} 
	className={`bg-gray-100 
	${isActive?"":"hover:bg-gray-400"}
	h-11 inline-flex justify-center items-center 
	disabled:cursor-default disabled:bg-button-disabled 
	active:shadow-button
	p-3 min-w-max 
	border border-blue-900
	text-black font-semibold
	relative
	`}>
			<div className="flex justify-center items-center">
				<IconContext.Provider value={{className:"mr-1"}}>
					{props.icon?<props.icon/>:null}
				</IconContext.Provider>
				
				<div className="pointer-events-none w-fit mr-1">
					{props.text?props.text:""}
				</div>
				<IconContext.Provider value={{className:""}}>
					<VscChevronDown/>
				</IconContext.Provider>
			</div>
			{isActive?<DropDownMenu>
				{props.children}
			</DropDownMenu>:null}
			
	</button>
	)
}