import { ComponentsList } from '../../dynamic-component/enum/components-list';

export enum InputFieldTypes {
  TEXT = <any>'TEXT',
  PASSWORD = <any>'PASSWORD',
  EMAIL = <any>'EMAIL',
  CHECKBOX = <any>'CHECKBOX',
}
export enum InputFieldTypesComponent {
  TEXT = <any>ComponentsList.INPUT,
  PASSWORD = <any>ComponentsList.INPUT,
  EMAIL = <any>ComponentsList.INPUT,
  CHECKBOX = <any>ComponentsList.CHECKBOX,
}

export enum InputFieldTypesName {
  TEXT = <any>'text',
  PASSWORD = <any>'password',
  EMAIL = <any>'email',
  CHECKBOX = <any>'checkbox',
}
