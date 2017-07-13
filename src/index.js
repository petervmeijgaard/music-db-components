import Alert from './components/alert/alert';
import AlertBody from './components/alert/alert-body';
import AlertClose from './components/alert/alert-close';
import Aligner from './components/aligner/aligner';
import AutoComplete from './components/auto-complete/auto-complete';
import AutoCompleteIcon from './components/auto-complete/auto-complete-icon';
import AutoCompleteItem from './components/auto-complete/auto-complete-item';
import AutoCompleteList from './components/auto-complete/auto-complete-list';
import Button from './components/button/button';
import Card from './components/card/card';
import CardBody from './components/card/card-body';
import CardFooter from './components/card/card-footer';
import CardHeading from './components/card/card-heading';
import CardTitle from './components/card/card-title';
import Col from './components/col/col';
import Content from './components/content/content';
import Definition from './components/definition/definition';
import DefinitionDescription from './components/definition/definition-description';
import DefinitionTerm from './components/definition/definition-term';
import Drawer from './components/drawer/drawer';
import DrawerBody from './components/drawer/drawer-body';
import DrawerFooter from './components/drawer/drawer-footer';
import DrawerHeader from './components/drawer/drawer-header';
import DrawerTitle from './components/drawer/drawer-title';
import Form from './components/form/form';
import FormGroup from './components/form/form-group';
import Grid from './components/grid/grid';
import Header from './components/header/header';
import Icon from './components/icon/icon';
import InputGroup from './components/input-group/input-group';
import NavIcon from './components/nav-icon/nav-icon';
import Navigation from './components/navigation/navigation';
import NavigationContent from './components/navigation/navigation-content';
import NavigationItem from './components/navigation/navigation-item';
import NavigationLink from './components/navigation/navigation-link';
import Overlay from './components/overlay/overlay';
import Pagination from './components/pagination/pagination';
import PaginationItem from './components/pagination/pagination-item';
import Row from './components/row/row';
import Select from './components/select/select';
import SelectIcon from './components/select/select-icon';
import SelectItem from './components/select/select-item';
import SelectLabel from './components/select/select-label';
import SelectList from './components/select/select-list';
import SelectSelected from './components/select/select-selected';
import Table from './components/table/table';
import TableBody from './components/table/table-body';
import TableCell from './components/table/table-cell';
import TableHeader from './components/table/table-header';
import TableHead from './components/table/table-head';
import TableRow from './components/table/table-row';
import TextArea from './components/text-area/text-area';
import TextField from './components/text-field/text-field';
import Toolbar from './components/toolbar/toolbar';
import ToolbarTitle from './components/toolbar/toolbar-title';
import ToolbarAction from './components/toolbar/toolbar-action';
import ToolbarActions from './components/toolbar/toolbar-actions';

export default {
  Alert,
  AlertBody,
  AlertClose,
  Aligner,
  AutoComplete,
  AutoCompleteIcon,
  AutoCompleteItem,
  AutoCompleteList,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeading,
  CardTitle,
  Col,
  Content,
  Definition,
  DefinitionDescription,
  DefinitionTerm,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  Form,
  FormGroup,
  Grid,
  Header,
  Icon,
  InputGroup,
  NavIcon,
  Navigation,
  NavigationContent,
  NavigationItem,
  NavigationLink,
  Overlay,
  Pagination,
  PaginationItem,
  Row,
  Select,
  SelectIcon,
  SelectItem,
  SelectLabel,
  SelectList,
  SelectSelected,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TextArea,
  TextField,
  Toolbar,
  ToolbarTitle,
  ToolbarAction,
  ToolbarActions,

  install(Vue) {
    Vue.component('v-alert', Alert);
    Vue.component('v-alert-body', AlertBody);
    Vue.component('v-alert-close', AlertClose);
    Vue.component('v-aligner', Aligner);
    Vue.component('v-auto-complete', AutoComplete);
    Vue.component('v-auto-complete-icon', AutoCompleteIcon);
    Vue.component('v-auto-complete-item', AutoCompleteItem);
    Vue.component('v-auto-complete-list', AutoCompleteList);
    Vue.component('v-button', Button);
    Vue.component('v-card', Card);
    Vue.component('v-card-body', CardBody);
    Vue.component('v-card-footer', CardFooter);
    Vue.component('v-card-heading', CardHeading);
    Vue.component('v-card-title', CardTitle);
    Vue.component('v-col', Col);
    Vue.component('v-content', Content);
    Vue.component('v-definition', Definition);
    Vue.component('v-definition-description', DefinitionDescription);
    Vue.component('v-definition-term', DefinitionTerm);
    Vue.component('v-drawer', Drawer);
    Vue.component('v-drawer-body', DrawerBody);
    Vue.component('v-drawer-footer', DrawerFooter);
    Vue.component('v-drawer-header', DrawerHeader);
    Vue.component('v-drawer-title', DrawerTitle);
    Vue.component('v-form', Form);
    Vue.component('v-form-group', FormGroup);
    Vue.component('v-grid', Grid);
    Vue.component('v-header', Header);
    Vue.component('v-icon', Icon);
    Vue.component('v-input-group', InputGroup);
    Vue.component('v-nav-icon', NavIcon);
    Vue.component('v-navigation', Navigation);
    Vue.component('v-navigation-content', NavigationContent);
    Vue.component('v-navigation-item', NavigationItem);
    Vue.component('v-navigation-link', NavigationLink);
    Vue.component('v-overlay', Overlay);
    Vue.component('v-pagination', Pagination);
    Vue.component('v-pagination-item', PaginationItem);
    Vue.component('v-row', Row);
    Vue.component('v-select', Select);
    Vue.component('v-select-icon', SelectIcon);
    Vue.component('v-select-item', SelectItem);
    Vue.component('v-select-label', SelectLabel);
    Vue.component('v-select-list', SelectList);
    Vue.component('v-select-selected', SelectSelected);
    Vue.component('v-table', Table);
    Vue.component('v-table-body', TableBody);
    Vue.component('v-table-cell', TableCell);
    Vue.component('v-table-head', TableHead);
    Vue.component('v-table-header', TableHeader);
    Vue.component('v-table-row', TableRow);
    Vue.component('v-text-area', TextArea);
    Vue.component('v-text-field', TextField);
    Vue.component('v-toolbar', Toolbar);
    Vue.component('v-toolbar-title', ToolbarTitle);
    Vue.component('v-toolbar-action', ToolbarAction);
    Vue.component('v-toolbar-actions', ToolbarActions);
  },
};

export { Alert };
export { AlertBody };
export { AlertClose };
export { Aligner };
export { AutoComplete };
export { AutoCompleteIcon };
export { AutoCompleteItem };
export { AutoCompleteList };
export { Button };
export { Card };
export { CardBody };
export { CardFooter };
export { CardHeading };
export { CardTitle };
export { Col };
export { Content };
export { Definition };
export { DefinitionDescription };
export { DefinitionTerm };
export { Drawer };
export { DrawerBody };
export { DrawerFooter };
export { DrawerHeader };
export { DrawerTitle };
export { Form };
export { FormGroup };
export { Grid };
export { Header };
export { Icon };
export { InputGroup };
export { NavIcon };
export { Navigation };
export { NavigationContent };
export { NavigationItem };
export { NavigationLink };
export { Overlay };
export { Pagination };
export { PaginationItem };
export { Row };
export { Select };
export { SelectIcon };
export { SelectItem };
export { SelectLabel };
export { SelectList };
export { SelectSelected };
export { Table };
export { TableBody };
export { TableCell };
export { TableHead };
export { TableHeader };
export { TableRow };
export { TextArea };
export { TextField };
export { Toolbar };
export { ToolbarTitle };
export { ToolbarAction };
export { ToolbarActions };
