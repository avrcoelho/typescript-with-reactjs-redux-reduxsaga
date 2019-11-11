import React from 'react';

import { Repository } from '../../store/ducks/repositories/types';

interface OwnProps {
  respository: Repository
}

export default function RepositoryItem({ respository }: OwnProps) {
  return <li>{respository.name}</li>
}