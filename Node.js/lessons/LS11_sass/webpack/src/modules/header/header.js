import { builder } from '../elementBuilder';
import './header.scss';

const html = '<a href="/">Logo</a>';

export const header = builder('header', 'header', html);