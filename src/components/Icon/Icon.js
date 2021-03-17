import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'theme-ui'

import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'
import {
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
  FaDownload,
  FaHome,
  FaPlus,
  FaPhone,
  FaTimes,
  FaUsers,
  FaBoxes,
  FaCalendarAlt,
  FaLightbulb,
  FaChartBar,
  FaWhatsapp,
  FaTools,
  FaSearch,
} from 'react-icons/fa'

import { FiPlusCircle, FiMinusCircle, FiExternalLink } from 'react-icons/fi'
import { MdError, MdWarning } from 'react-icons/md'

import { ReactComponent as ArrowLeftIcon } from 'assets/icons/arrow-left.svg'
import { ReactComponent as BillRoundIcon } from 'assets/icons/bill-o.svg'
import { ReactComponent as DocumentRoundIcon } from 'assets/icons/document-o.svg'
import { ReactComponent as RequirementsRoundIcon } from 'assets/icons/requirements-o.svg'
import { ReactComponent as CertificateRoundIcon } from 'assets/icons/certificate-o.svg'
import { ReactComponent as HelpRoundIcon } from 'assets/icons/help-o.svg'
import { ReactComponent as Iconfinder } from 'assets/icons/iconfinder.svg'
import { ReactComponent as ContractIcon } from 'assets/icons/contract-b.svg'
import { ReactComponent as InventoryIcon } from 'assets/icons/inventory-b.svg'
import { ReactComponent as RequestIcon } from 'assets/icons/request-b.svg'
import { ReactComponent as DownloadIcon } from 'assets/icons/download.svg'
import { ReactComponent as GoogleIcon } from 'assets/icons/google.svg'
import { ReactComponent as FacebookIcon } from 'assets/icons/facebook.svg'
import { ReactComponent as DocumentIcon } from 'assets/icons/document.svg'
import { ReactComponent as ArrowRightIcon } from 'assets/icons/arrow-right.svg'
import { ReactComponent as HeartIcon } from 'assets/icons/heart.svg'
import { ReactComponent as LockIcon } from 'assets/icons/lock.svg'
import { ReactComponent as MiniUserIcon } from 'assets/icons/mini-user.svg'
import { ReactComponent as LifeRingIcon } from 'assets/icons/life-ring.svg'
import { ReactComponent as SignOutIcon } from 'assets/icons/sign-out.svg'
import { ReactComponent as CloseCircledIcon } from 'assets/icons/close-circled.svg'
import { ReactComponent as BellIcon } from 'assets/icons/bell.svg'
import { ReactComponent as UserIcon } from 'assets/icons/user.svg'
import { ReactComponent as BarsIcon } from 'assets/icons/bars.svg'

import { ReactComponent as FileContractIcon } from 'assets/icons/file-contract.svg'

import { ReactComponent as CloseIcon } from 'assets/icons/close.svg'
import { ReactComponent as UserFriendsIcon } from 'assets/icons/user-friends.svg'
import { ReactComponent as HandshakeIcon } from 'assets/icons/handshake.svg'
import { ReactComponent as RedPdfIcon } from 'assets/icons/pdf-red.svg'

import { ReactComponent as WhatsappIcon } from 'assets/icons/whatsapp.svg'

const iconMaps = {
  'arrow-left': ArrowLeftIcon,

  'bill-round': BillRoundIcon,
  'document-round': DocumentRoundIcon,
  'requirements-round': RequirementsRoundIcon,
  'certificates-round': CertificateRoundIcon,
  'help-round': HelpRoundIcon,
  whatsapp: WhatsappIcon,

  'document-finder': Iconfinder,
  contract: ContractIcon,
  inventory: InventoryIcon,
  request: RequestIcon,
  download: DownloadIcon,
  pdf: RedPdfIcon,

  google: GoogleIcon,
  facebook: FacebookIcon,

  document: DocumentIcon,
  'arrow-right': ArrowRightIcon,
  heart: HeartIcon,
  lock: LockIcon,
  'mini-user': MiniUserIcon,
  'life-ring': LifeRingIcon,
  'sign-out': SignOutIcon,

  'chevron-down': RiArrowDownSLine,
  'chevron-up': RiArrowUpSLine,

  'arrow-down': FaChevronDown,
  plus: FaPlus,
  'fa-download': FaDownload,
  'fa-close': FaTimes,

  'close-circled': CloseCircledIcon,
  bell: BellIcon,
  user: UserIcon,
  bars: BarsIcon,

  'file-contract': FileContractIcon,
  close: CloseIcon,
  'user-friend': UserFriendsIcon,
  handshake: HandshakeIcon,

  'fa-boxes': FaBoxes,
  'fa-calendar': FaCalendarAlt,
  'fa-chart-bar': FaChartBar,
  'fa-chevron-left': FaChevronLeft,
  'fa-chevron-right': FaChevronRight,
  'fa-home': FaHome,
  'fa-lightbulb': FaLightbulb,
  'fa-phone': FaPhone,
  'fa-users': FaUsers,
  'fa-search': FaSearch,
  'fa-tools': FaTools,
  'fa-whatsapp': FaWhatsapp,

  'fi-plus-circle': FiPlusCircle,
  'fi-minus-circle': FiMinusCircle,
  'fi-external-link': FiExternalLink,

  'md-error': MdError,
  'md-warning': MdWarning,
}

function Icon({ name, ...props }) {
  return <Box as={iconMaps[name]} {...props} />
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Icon
